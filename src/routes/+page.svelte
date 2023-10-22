<script lang="ts">
import { onMount, tick } from 'svelte';
import { AppShell } from '@skeletonlabs/skeleton';
import {
  IconDownload,
  IconExternalLink,
  IconMaximize,
  Header,
  Sidebar,
  FontHeader,
  Controls,
  MonacoEditor,
  PlayerBadge,
  WinnerBadge,
  createGame,
  createConfetti
} from '$lib';
import { showName, selectedTheme, fontSize, fontLigatures } from '$lib/store';

export let data;
let { fonts } = data;
let game;
let currentBracket;

onMount(() => {
  startGame();
});

function startGame() {
  game = createGame(fonts);
  currentBracket = game.startGame();
}

function getFontByFamilyName(familyName: string) {
  return fonts.find((font) => font.family === familyName);
}

async function chooseWinner(player, event) {
  currentBracket = game.setWinner(player);
  game = game;
  if (currentBracket?.winner) {
    createConfetti();
    $showName = true;
  } else {
    createConfetti('small', {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight
    });
  }
  await tick();
  scrollToBracket();
}

function scrollToBracket() {
  const winnerElement = document.querySelector('.winner-candidate');
  if (winnerElement) {
    winnerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const activeBracket = document.querySelector('.font-bracket.active');
  if (activeBracket) {
    activeBracket.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
</script>

<AppShell
  slotSidebarLeft="flex relative resize-x min-w-0 w-0 lg:w-[30rem] lg:min-w-[16rem] !overflow-visible"
  slotHeader="z-30">
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar>
      <button class="variant-filled-primary btn" on:click="{startGame}"
        >Restart Game</button>
      {#if game?.rounds.length}
        <div class="table-container rounded-none p-2">
          <div class="font-brackets">
            {#each game.rounds as round, index (round)}
              {#if game.finalRound === index}
                <div class="round-winner">
                  <WinnerBadge>
                    <span style="font-family: '{round[0].winner.family}'">
                      {round[0].winner.family}
                    </span>
                  </WinnerBadge>
                </div>
              {:else}
                <div class="{`round-${index + 1}`}">
                  {#each round as bracket (bracket)}
                    <div
                      class="font-bracket"
                      class:active="{bracket === currentBracket}">
                      {#each bracket?.players as font (font)}
                        <PlayerBadge
                          class="{bracket?.winner?.family == font.family
                            ? 'variant-ghost-primary'
                            : 'variant-soft-surface'}">
                          <span style="font-family: '{font.family}'">
                            {$showName ? font.family : 'ABC abc 123'}
                          </span>
                        </PlayerBadge>
                      {/each}
                      <div
                        class="line-bracket {bracket.players.length === 1
                          ? 'bottom-1/2'
                          : ''}">
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div
    class="bg-surface-50-900-token grid h-full grid-cols-1 grid-rows-2 gap-4 p-4 md:grid-cols-2 md:grid-rows-1">
    {#if currentBracket?.players?.length}
      <div class="relative flex flex-col gap-4">
        <FontHeader
          font="{getFontByFamilyName(currentBracket.players[0].family)}" />
        <MonacoEditor
          class="overflow-hidden rounded-container-token"
          fontSize="{$fontSize}"
          fontFamily="{currentBracket.players[0].family}"
          fontLigatures="{$fontLigatures}"
          themeName="{$selectedTheme}" />
        <button
          class="variant-filled-primary btn absolute bottom-10 self-center shadow-xl"
          on:click="{(e) => chooseWinner(currentBracket.players[0], e)}"
          >Choose</button>
      </div>
      <div class="relative flex flex-col gap-4">
        <FontHeader
          font="{getFontByFamilyName(currentBracket.players[1].family)}" />
        <MonacoEditor
          class="overflow-hidden rounded-container-token"
          fontSize="{$fontSize}"
          fontFamily="{currentBracket.players[1].family}"
          fontLigatures="{$fontLigatures}"
          themeName="{$selectedTheme}" />
        <button
          class="variant-filled-primary btn absolute bottom-10 self-center shadow-xl"
          on:click="{(e) => chooseWinner(currentBracket.players[1], e)}"
          >Choose</button>
      </div>
    {:else if currentBracket?.winner}
      <div
        class="bg-surface-50-900-token border-surface-900-50-token relative col-span-1 row-span-2 border-4 p-6 text-center md:col-span-2 md:row-span-1 md:p-10">
        <img
          class="absolute bottom-0 left-0 right-0 mx-auto opacity-60"
          src="/trophy.png"
          alt="Trophy of Font"
          width="400" />
        <div
          class="relative mx-auto flex max-w-5xl flex-col gap-12 p-4 md:p-10">
          <div
            class="border-surface-700-200-token flex flex-col gap-6 border-t-2 pt-10 tracking-widest">
            <h2 class="h2">CERTIFICATE OF ABSOLUTE AWESOMENESS</h2>
            <h4 class="h4">HEREBY UNLEASHED UPON</h4>
          </div>
          <div
            class="my-4 text-4xl md:text-6xl"
            style="font-family: '{currentBracket?.winner.family}'">
            {currentBracket?.winner.family}
          </div>
          <div class="variant-soft-surface btn-group self-center">
            <a href="{currentBracket?.winner.siteUrl}" target="_blank">
              <IconExternalLink size="24" />
              <span class="hidden 2xl:block"
                >Visit {currentBracket?.winner.family}</span>
            </a>
            <a href="{currentBracket?.winner.downloadUrl}">
              <IconDownload size="24" />
              <span class="hidden 2xl:block"
                >Download {currentBracket?.winner.family}</span>
            </a>
            <a
              href="/{encodeURIComponent(
                currentBracket?.winner.family.replace(/\s+/g, '')
              )}">
              <IconMaximize size="24" />
              <span class="hidden 2xl:block">View Font Detail</span>
            </a>
          </div>
          <h4 class="h4">
            For mastering the art of bézier curve pageantry, where zeros, arrows
            and curly brackets stand heroic in a 10-hour coding crusade! For
            turning each keystroke into a clear, courageous character,
            triumphing in the tumultuous tournament of type!
          </h4>
          <div class="mt-20 hidden justify-between md:flex">
            <div>
              <p class="mb-2">__________________________</p>
              <p class="text-center">HEAD OF DEPARTMENT</p>
            </div>
            <div>
              <p class="mb-2">__________________________</p>
              <p class="text-center">COORDINATOR</p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</AppShell>

<script lang="ts">
import { onMount } from 'svelte';
import { AppShell } from '@skeletonlabs/skeleton';
import {
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
import { selectedTheme, fontSize, fontLigatures } from '$lib/store';

export let data;
let { fonts } = data;
let game;
let bracket;

onMount(() => {
  startGame();
});

function startGame() {
  game = createGame(fonts);
  bracket = game.startGame();
}

function getFontByFamilyName(familyName: string) {
  return fonts.find((font) => font.family === familyName);
}

function chooseWinner(player) {
  bracket = game.setWinner(player);
  game = game;
  console.log(game);
  if (bracket?.winner) {
    createConfetti();
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
      <button class="btn variant-filled-primary" on:click="{startGame}"
        >Restart Game</button>
      {#if game?.rounds.length}
        <div class="font-brackets">
          {#each game.rounds as round, index (round)}
            {#if game.finalRound === index}
              <div class="round-winner px-6">
                <WinnerBadge>font.family</WinnerBadge>
              </div>
            {:else}
              <div class="{`round-${index + 1}`}">
                {#each round as bracket (bracket)}
                  <div class="font-bracket">
                    {#each bracket?.players as font (font)}
                      <PlayerBadge
                        class="{bracket?.winner?.family == font.family
                          ? 'variant-filled-success'
                          : ''}">{font.family}</PlayerBadge>
                    {/each}
                    <div class="line-bracket"></div>
                  </div>
                {/each}
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </Sidebar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <Controls />
  </svelte:fragment>
  <div
    class="grid grid-cols-1 md:grid-cols-2 h-full bg-surface-50-900-token p-4 gap-4">
    {#if bracket?.players?.length}
      <div class="flex flex-col gap-4 relative">
        <FontHeader font="{getFontByFamilyName(bracket.players[0].family)}" />
        <MonacoEditor
          class="rounded-container-token overflow-hidden"
          fontSize="{$fontSize}"
          fontFamily="{bracket.players[0].family}"
          fontLigatures="{$fontLigatures}"
          themeName="{$selectedTheme}" />
        <button
          class="btn variant-filled-primary absolute bottom-4 self-center"
          on:click="{chooseWinner(bracket.players[0])}">Choose</button>
      </div>
      <div class="flex flex-col gap-4 relative">
        <FontHeader font="{getFontByFamilyName(bracket.players[1].family)}" />
        <MonacoEditor
          class="rounded-container-token overflow-hidden"
          fontSize="{$fontSize}"
          fontFamily="{bracket.players[1].family}"
          fontLigatures="{$fontLigatures}"
          themeName="{$selectedTheme}" />
        <button
          class="btn variant-filled-primary absolute bottom-4 self-center"
          on:click="{chooseWinner(bracket.players[1])}">Choose</button>
      </div>
    {:else if bracket?.winner}
      <div
        class="relative p-10 col-span-2 text-center border-4 border-surface-900-50-token bg-surface-50-900-token">
        <img
          class="absolute -bottom-4 mx-auto left-0 right-0"
          src="/trophy.png"
          alt="Trophy of Font"
          width="400" />
        <div class="relative max-w-5xl mx-auto p-10 flex flex-col gap-12">
          <div
            class="border-t-2 pt-10 border-surface-700-200-token flex flex-col gap-6 tracking-widest">
            <h2 class="h2">CERTIFICATE OF ABSOLUTE AWESOMENESS</h2>
            <h4 class="h4">HEREBY UNLEASHED UPON</h4>
          </div>
          <div
            class="text-6xl my-4"
            style="font-family: '{bracket?.winner.family}'">
            {bracket?.winner.family}
          </div>
          <h4 class="h4">
            For mastering the art of bézier curve pageantry, where zeros, arrows
            and curly brackets stand heroic in a 10-hour coding crusade! For
            turning each keystroke into a clear, courageous character,
            triumphing in the tumultuous tournament of type!
          </h4>
          <div class="flex justify-between mt-20">
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

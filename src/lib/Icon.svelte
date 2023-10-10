<script lang="ts">
export let name: string;
</script>

{#if name === 'Persona'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z"
    ></path>
  </svg>
{:else if name === 'Color'}
  <svg width="24" height="24" fill="none">
    <rect width="3" height="3" x="6" y="11" fill="currentColor" rx="1.5"></rect>
    <rect width="3" height="3" x="9" y="7" fill="currentColor" rx="1.5"></rect>
    <rect width="3" height="3" x="14" y="7" fill="currentColor" rx="1.5"></rect>
    <path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      d="M22 10.5C22.002 6 17.5 2 12 2S2 6.5 2 12s4 9.5 9 10c-1-2-.42-4 1-5.5 2.87-3.031 10 .029 10-6z"
      clip-rule="evenodd"></path>
  </svg>
{:else if name === 'Typeface'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 7V4h8m8 3V4h-8m0 0v16m0 0H9m3 0h3"></path>
  </svg>
{:else if name === 'Pen'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.91 18.86l-7.425-1.768L3.303 3.303m0 0l13.789 3.182 1.768 7.425M3.303 3.303l7.071 7.071m0 0a2 2 0 102.829 2.829 2 2 0 00-2.829-2.829zm2.475 9.546l7.071-7.07 2.829 2.828-7.071 7.07-2.829-2.828z"
    ></path>
  </svg>
{:else if name === 'Kerning'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 18v2m0 2v-2m0 0H2.5M17 18v2m0 0v2m0-2h5M3.25 10.25L4.5 7.5 7 2l3.75 8.25m-7.5 0L2 13m1.25-2.75h7.5M12 13l-1.25-2.75M22 2l-5 11-5-11m-2680-1305h100v100h-100v-100z"
    ></path>
  </svg>
{:else if name === 'Typography System'}
  <svg width="24" height="24" fill="none">
    <path
      fill="currentColor"
      d="M15 8a1 1 0 100 2V8zm5 2a1 1 0 100-2v2zm-5 2a1 1 0 100 2v-2zm5 2a1 1 0 100-2v2zM4 16a1 1 0 100 2v-2zm16 2a1 1 0 100-2v2zM4 20a1 1 0 100 2v-2zm16 2a1 1 0 100-2v2zm0-16a1 1 0 100-2v2zm-2-2a1 1 0 100 2V4zm-3 6h5V8h-5v2zm0 4h5v-2h-5v2zM4 18h16v-2H4v2zm0 4h16v-2H4v2zM20 4h-2v2h2V4z"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 4V2h5.5M14 4V2H8.5m0 0v11m0 0H6m2.5 0H11"></path>
  </svg>
{:else if name === 'Brand Guidelines'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 12V6h3.5S16 6 16 9s-2.5 3-2.5 3M10 12v6h4s3 0 3-3-3-3-3-3h-.5M10 12h3.5M6 6H2m4 4H2m4 4H2m4 4H2M4 2h17v20H4V2z"
    ></path>
  </svg>
{:else if name === 'Menu'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 12H21M3 6H21M3 18H21"></path>
  </svg>
{:else if name === 'Maximize'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"></path>
  </svg>
{:else if name === 'Close'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 6l12 12m0-12L6 18"></path>
  </svg>
{:else if name === 'Image'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 21h16v-6M5 21H3V3h18v12M5 21l11-11 5 5"></path>
    <circle fill="currentColor" cx="8.5" cy="8.5" r="1.5"></circle>
  </svg>
{:else if name === 'Grid'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11 0h7v7h-7v-7zm0-11h7v7h-7V3z"></path>
  </svg>
{:else if name === 'List'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="M8 12h13M8 18h13M8 6h13"></path>
    <circle cx="3" cy="6" r="1" fill="currentColor"></circle>
    <circle cx="3" cy="12" r="1" fill="currentColor"></circle>
    <circle cx="3" cy="18" r="1" fill="currentColor"></circle>
  </svg>
{:else if name === 'Search'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="M21 21l-4.343-4.343m0 0A8 8 0 105.343 5.343a8 8 0 0011.314 11.314z"
    ></path>
  </svg>
{:else if name === 'Persona Check'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 21v-2a4 4 0 014-4h7a4 4 0 014 4v2m1-10l2 2 4-4M12.5 7a4 4 0 11-8 0 4 4 0 018 0z"
    ></path>
  </svg>
{:else if name === 'Typeface Check'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M2 7V4h8m8 3V4h-8m0 0v16m0 0H7m3 0h3m4-6l2 2 4-4"></path>
  </svg>
{:else if name === 'Arrow Down'}
  <svg width="24" height="24" fill="none">
    <path
      fill="currentColor"
      d="M13 5a1 1 0 10-2 0h2zm-1 14l-.707.707a1 1 0 001.414 0L12 19zm7.707-6.293a1 1 0 00-1.414-1.414l1.414 1.414zm-14-1.414a1 1 0 00-1.414 1.414l1.414-1.414zM11 5v14h2V5h-2zm1.707 14.707l7-7-1.414-1.414-7 7 1.414 1.414zm0-1.414l-7-7-1.414 1.414 7 7 1.414-1.414z"
    ></path>
  </svg>
{:else if name === 'Arrow Right'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Trash'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 6h2m16 0h-2M5 6v16h14V6M5 6h3m11 0h-3M8 6V2h8v4M8 6h8m-6 5v6m4-6v6"
    ></path>
  </svg>
{:else if name === 'Checkbox Off'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 3h18v18H3z"></path>
  </svg>
{:else if name === 'Checkbox On'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 12v9H3V3h13m-7 8l3 3L22 4"></path>
  </svg>
{:else if name === 'Mail'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
    <path
      stroke="currentColor"
      d="M22 6L12 13L2 6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Info'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M12 16V12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
    <circle fill="currentColor" cx="12" cy="8" r="1"></circle>
  </svg>
{:else if name === 'Edit'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M21 13.66V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10.34M18 2L22 6L12 16H8V12L18 2Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Link'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M9 17H6C4.67392 17 3.40215 16.4732 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 9.23858 3.23858 7 6 7H9M8 12H16M15 7H18C19.3261 7 20.5979 7.52678 21.5355 8.46447C22.4732 9.40215 23 10.6739 23 12C23 14.7614 20.7614 17 18 17H15"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Plus'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M4 12H20M12 4V20"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Selector Anchor'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M15.5 19H8m0 0v-3H5m3 3v3H2v-6h3m0 0V8.5m11.02.874L22.032 6.9 7.89 1.243 13.9 15.03l2.122-5.657zm0 0l6.011 6.01"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Selector Move Only'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M9 5L12 2L15 5M5 9L2 12L5 15M15 19L12 22L9 19M19 9L22 12L19 15M2 12H22M12 2V22"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Selector Type'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      stroke-width="2"
      d="M2 22l1.333-3.143M12 22l-1.524-3.143m-7.143 0L6.667 11l3.81 7.857m-7.144 0h7.143m5.544-9.483L22.032 6.9 7.89 1.243 13.9 15.03l2.122-5.657zm0 0l6.011 6.01"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Selector Shape'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M3 9l10 13H3V9z"
      stroke-linejoin="round"
      stroke-width="2"></path>
    <path
      stroke="currentColor"
      d="M16.02 9.374L22.032 6.9 7.89 1.243 13.9 15.03l2.122-5.657zm0 0l6.011 6.01"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Selector Icon'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="m16.02 9.374 6.01 6.01m-6.01-6.01L22.032 6.9 7.89 1.243 13.9 15.03l2.122-5.657-.002.001ZM6.25 12l1.622 3.287 3.628.53-2.625 2.556.62 3.612L6.25 20.28l-3.244 1.706.619-3.611L1 15.816l3.628-.53L6.25 12Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Selector Kerning'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M9 13v4.5M9 22v-4.5m0 0h3M4 13v4.5m0 0V22m0-4.5H1"
      stroke-linecap="round"
      stroke-width="2"></path>
    <path
      stroke="currentColor"
      d="M16.02 9.374L22.032 6.9 7.89 1.243 13.9 15.03l2.122-5.657zm0 0l6.011 6.01"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Arrow Curve Left'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M4 10H16C18.2091 10 20 11.7909 20 14V14C20 16.2091 18.2091 18 16 18H14M4 10L8 14M4 10L8 6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Arrow Curve Right'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M20 10H8C5.79086 10 4 11.7909 4 14V14C4 16.2091 5.79086 18 8 18H10M20 10L16 14M20 10L16 6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
{:else if name === 'Arrow Chevron Down Small'}
  <svg width="12" height="12" fill="none">
    <path
      stroke="currentColor"
      d="M2 4l4 4 4-4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Arrow Chevron Up Small'}
  <svg width="12" height="12" fill="none">
    <path
      stroke="currentColor"
      d="M10 8L6 4L2 8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Arrow Chevron Left'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M15.5 5l-7 7 7 7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Arrow Right Up'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M10 9L15 4L20 9M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Copy'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M15 5V2H2v13h3m4-6h13v13H9V9z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Flip Horizontal'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M22 10l-6.5 5 6.5 5V10zm-10-.5v1m0 4v1m0 4v1M2 10l6.5 5L2 20V10zm3-4c1-2 3.8-4 7-4s6 2 7 4m0 0h-3.5M19 6V2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Flip Vertical'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M14 22l-5-6.5L4 22h10zm.5-10h-1m-4 0h-1m-4 0h-1M14 2L9 8.5 4 2h10zm4 3c2 1 4 3.8 4 7s-2 6-4 7m0 0v-3.5m0 3.5h4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Editable Icon Badge Small'}
  <svg width="12" height="12" fill="none">
    <path
      stroke="currentColor"
      d="M1 3L3 3M3 1L3 5M6 3L11 3M1 9L6 9M9 7L9 9M9 9L9 11M9 9L11 9"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Canvas Shape Only'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M19 1C12.9249 1 8 5.92487 8 12C8 18.0751 12.9249 23 19 23"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Canvas Selected'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M19 23C13.6079 23 9.12191 19.1202 8.1814 14M8.1814 10C9.12191 4.87976 13.6079 1 19 0.999999M8 10V10C6.89543 10 6 10.8954 6 12V12V12C6 13.1046 6.89543 14 8 14V14C9.10457 14 10 13.1046 10 12V12C10 10.8954 9.10457 10 8 10V10Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Canvas Fully Selected'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M8 10V10C6.89543 10 6 10.8954 6 12V12V12C6 13.1046 6.89543 14 8 14V14M8 10V10C9.10457 10 10 10.8954 10 12V12C10 13.1046 9.10457 14 8 14V14M8 10L8 5M19 23C13.6079 23 9.12191 19.1202 8.1814 14M8.1814 10C9.12191 4.87976 13.6079 1 19 0.999999M8 5C6.89543 5 6 4.10457 6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3C10 4.10457 9.10457 5 8 5ZM8 19C9.10457 19 10 19.8954 10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19ZM8 19L8 14"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Flip View'}
  <svg width="24" height="24" fill="none">
    <path
      stroke="currentColor"
      d="M14.5 12L13.5 12M9.5 12L8.5 12M4.5 12L3.5 12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
    <path
      stroke="currentColor"
      d="M18 5C20 6 22 8.8 22 12C22 15.2 20 18 18 19M18 19L18 15.5M18 19L22 19"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
    <path
      stroke="currentColor"
      d="M4 3.3125V2H9M14 3.3125V2H9M9 2V9M9 9H7.125M9 9H10.875"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
    <path
      stroke="currentColor"
      d="M14 20.6875L14 22L9 22M4 20.6875L4 22L9 22M9 22L9 15M9 15L10.875 15M9 15L7.125 15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Highlight Gap'}
  <svg width="24" height="24" fill="none">
    <rect fill="currentColor" opacity="0.5" x="3" y="11" width="18" height="10"
    ></rect>
    <path
      stroke="currentColor"
      d="M4 7V4H12M20 7V4H12M12 4V20M12 20H9M12 20H15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"></path>
  </svg>
{:else if name === 'Google'}
  <svg viewBox="0 0 48 48" width="21px" height="21px">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
    </path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
{/if}

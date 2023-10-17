import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const standardTheme: CustomThemeConfig = {
  name: 'standard',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '23 23 23',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '6px',
    '--theme-rounded-container': '14px',
    '--theme-border-base': '2px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '23 23 23',
    '--on-tertiary': '23 23 23',
    '--on-success': '23 23 23',
    '--on-warning': '23 23 23',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #6366f1
    '--color-primary-50': '232 232 253', // #e8e8fd
    '--color-primary-100': '224 224 252', // #e0e0fc
    '--color-primary-200': '216 217 252', // #d8d9fc
    '--color-primary-300': '193 194 249', // #c1c2f9
    '--color-primary-400': '146 148 245', // #9294f5
    '--color-primary-500': '99 102 241', // #6366f1
    '--color-primary-600': '89 92 217', // #595cd9
    '--color-primary-700': '74 77 181', // #4a4db5
    '--color-primary-800': '59 61 145', // #3b3d91
    '--color-primary-900': '49 50 118', // #313276
    // secondary | #9ca3af
    '--color-secondary-50': '251 251 251', // #F9FAFB
    '--color-secondary-100': '244 244 244', // #f3f4f6
    '--color-secondary-200': '231 231 231', // #e5e7eb
    '--color-secondary-300': '213 213 213', // #d1d5db
    '--color-secondary-400': '163 163 163', // #9ca3af
    '--color-secondary-500': '85 85 85', // #4b5563
    '--color-secondary-600': '65 65 65', // #374151
    '--color-secondary-700': '41 41 41', // #1f2937
    '--color-secondary-800': '23 23 23', // #111827
    '--color-secondary-900': '7 7 7', // #030712
    // tertiary | #0EA5E9
    '--color-tertiary-50': '219 242 252', // #dbf2fc
    '--color-tertiary-100': '207 237 251', // #cfedfb
    '--color-tertiary-200': '195 233 250', // #c3e9fa
    '--color-tertiary-300': '159 219 246', // #9fdbf6
    '--color-tertiary-400': '86 192 240', // #56c0f0
    '--color-tertiary-500': '14 165 233', // #0EA5E9
    '--color-tertiary-600': '13 149 210', // #0d95d2
    '--color-tertiary-700': '11 124 175', // #0b7caf
    '--color-tertiary-800': '8 99 140', // #08638c
    '--color-tertiary-900': '7 81 114', // #075172
    // success | #16b629
    '--color-success-50': '220 244 223', // #dcf4df
    '--color-success-100': '208 240 212', // #d0f0d4
    '--color-success-200': '197 237 202', // #c5edca
    '--color-success-300': '162 226 169', // #a2e2a9
    '--color-success-400': '92 204 105', // #5ccc69
    '--color-success-500': '22 182 41', // #16b629
    '--color-success-600': '20 164 37', // #14a425
    '--color-success-700': '17 137 31', // #11891f
    '--color-success-800': '13 109 25', // #0d6d19
    '--color-success-900': '11 89 20', // #0b5914
    // warning | #e7ac08
    '--color-warning-50': '251 243 218', // #fbf3da
    '--color-warning-100': '250 238 206', // #faeece
    '--color-warning-200': '249 234 193', // #f9eac1
    '--color-warning-300': '245 222 156', // #f5de9c
    '--color-warning-400': '238 197 82', // #eec552
    '--color-warning-500': '231 172 8', // #e7ac08
    '--color-warning-600': '208 155 7', // #d09b07
    '--color-warning-700': '173 129 6', // #ad8106
    '--color-warning-800': '139 103 5', // #8b6705
    '--color-warning-900': '113 84 4', // #715404
    // error | #d21934
    '--color-error-50': '248 221 225', // #f8dde1
    '--color-error-100': '246 209 214', // #f6d1d6
    '--color-error-200': '244 198 204', // #f4c6cc
    '--color-error-300': '237 163 174', // #eda3ae
    '--color-error-400': '224 94 113', // #e05e71
    '--color-error-500': '210 25 52', // #d21934
    '--color-error-600': '189 23 47', // #bd172f
    '--color-error-700': '158 19 39', // #9e1327
    '--color-error-800': '126 15 31', // #7e0f1f
    '--color-error-900': '103 12 25', // #670c19
    // surface | #9ca3af
    '--color-surface-50': '251 251 251', // #F9FAFB
    '--color-surface-100': '244 244 244', // #f3f4f6
    '--color-surface-200': '231 231 231', // #e5e7eb
    '--color-surface-300': '213 213 213', // #d1d5db
    '--color-surface-400': '163 163 163', // #9ca3af
    '--color-surface-500': '85 85 85', // #4b5563
    '--color-surface-600': '65 65 65', // #374151
    '--color-surface-700': '41 41 41', // #1f2937
    '--color-surface-800': '23 23 23', // #111827
    '--color-surface-900': '7 7 7' // #030712
  }
};

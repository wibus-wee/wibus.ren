/*
 * @FilePath: /iucky.cn/utils/play.util.ts
 * @author: Wibus
 * @Date: 2022-11-23 17:04:52
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-25 16:51:16
 * Coding With IU
 */

export enum Play {
  commandPress = 'command-press',
  copyToClipboard = 'copy-to-clipboard',
  tick = 'tick',
  twitterSound = 'twitter-sound-2',
  workCircleClick = 'work-circle-click',
  openTile = 'open-tile',
  takeoutClick = 'takeout-click',
  navClick = 'nav-click',
  alSound1 = 'al-sound-1',
  alSound2 = 'al-sound-2',
  nock = 'nock',
  photosClick = 'photos-click',
  photosMenuClick = 'photos-menu-click',
  scrollwheel = 'scrollwheel',
}

export const preloadPlay = () => {
  Object.values(Play).forEach((play) => {
    const audio = new Audio(`/audio/${play}.mp3`);
    audio.load();
    window[play] = audio;
  });
};

export const play = (sound: Play) => {
  if (window[sound]) {
    window[sound].currentTime = 0;
    window[sound].play();
  }
}
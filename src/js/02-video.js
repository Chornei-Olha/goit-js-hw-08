// Добавь библиотеку как зависимость проекта через npm.

// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.

// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.

// Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".

// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы
// возобновить воспроизведение с сохраненной позиции.

// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время
// воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Инициализация плеера в файле скрипта
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const PLAYER__KEY = 'videoplayer-current-time';

// Отслеживание события timeupdate - обновление времени воспроизведения
// Время воспроизведения обновляется в хранилище не чаще чем раз в секунду
player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(timeupdate) {
  localStorage.setItem(PLAYER__KEY, timeupdate.seconds);
}

const currentTime = localStorage.getItem(PLAYER__KEY) || 0;

player.setCurrentTime(currentTime);

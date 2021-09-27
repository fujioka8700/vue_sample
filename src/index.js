import Vue from 'vue'
import mojs from '@mojs/core'
import "./style.scss"

new Vue({
  el: '#app',
  data: {
    message: 'こんにちは'
  }
})

const CIRCLE = new mojs.Shape({
  parent: '#parent',
  shape: 'circle',
  radius: 30,
  scale: { 0: 1 },
  fill: 'none',
  stroke: 'deeppink',
  strokeWidth: { 30: 0 },
  x: 'rand(-50, 50)', // 引数を元にランダムな値が入る - (min, max)
  y: 'rand(-50, 50)',
  duration: 300,
  // このSVGのアニメーションが完了した時点で呼び出される
  onComplete() {
    // rand()の値を再生成する
    this.generate();
  }
});

const RECT = new mojs.Shape({
  parent: '#parent',
  shape: 'rect',
  radius: 30,
  scale: { 0: 1 },
  fill: 'none',
  stroke: 'cyan',
  strokeWidth: { 30: 0 },
  x: 'rand(-50, 50)',
  y: 'rand(-50, 50)',
  delay: 150,
  duration: 300,
  onComplete() {
    this.generate();
  }
});

const POLYGON = new mojs.Shape({
  parent: '#parent',
  shape: 'polygon',
  radius: 30,
  points: 5,
  scale: { 0: 1 },
  fill: 'none',
  stroke: 'yellow',
  strokeWidth: { 30: 0 },
  x: 'rand(-50, 50)',
  y: 'rand(-50, 50)',
  delay: 300,
  duration: 300,
  onComplete() {
    this.generate();
  }
});

const TIMELINE = new mojs.Timeline({
  // Timelineに登録されている全てのアニメーションが完了したら呼び出される
  onComplete() {
    this.replay();
  }
});
TIMELINE.add(CIRCLE, RECT, POLYGON);
TIMELINE.play();


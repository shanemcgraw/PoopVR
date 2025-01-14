import React from 'react';

class DinoScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene fog="type: linear; color: #AAA; far:6000;">
      <a-assets>
        <a-asset-item id='stall' src='/assets/Toilet_Stall.dae' />
        <a-asset-item id='fern' src='/assets/fern.dae' />
        <img id='sky' src='/assets/prehistoric.jpg' />
        <img id='ground' src='/assets/muddyGround.jpg' />
        <img id='ptero' src='/assets/ptero.png' />
        <audio id='jungleSounds' src='/assets/jungleSounds.mp3' />
        <audio id='trexSound' src='/assets/trexSounds.mp3' />
        <audio id='pteroSound' src='/assets/pter.mp3' />
      </a-assets>
      <a-sky src='#sky'/>

      <a-entity position='0 0 0' rotation='0 -180 0'>
        <a-model scale='1.1 1.1 1.1' src='/assets/dino.dae' sound='src: /assets/trexSounds.mp3; loop: true; autoplay: true; volume: 25;' 
          id='trex' position='33 -8 0' rotation='0 95 0'>
        </a-model>
        <a-animation attribute='rotation'
                     dur='24000'
                     fill='forwards'
                     from='0 -180 0'
                     to='0 180 0'
                     easing='linear'
                     repeat='indefinite'/>
      </a-entity>

      <a-light type='directional' color='#f6da80' position='3 7 -1' intensity='1' />
      <a-light type='ambient' color='#f6da80' intensity='0.01' />

      <a-plane id='ground' src='#ground' position='0 0 -3' rotation='-90 0 0' width='10' height='10' />

      <a-entity id='battle' position='0.1 2 -0.1' sound='src:assets/jungleSounds.mp3; autoplay:true; loop:true;' />

      <a-entity position='0 1.5 0'> 
        <a-camera id='camera' wasd-controls-enabled='false'/>
      </a-entity>

      <a-entity position='0 10 -10'>
        <a-plane src='#ptero' sound='src: /assets/pter.mp3; autoplay: true; loop: true; volume: 15;' transparent='true' width='3' height='2' rotation='90 0 0'/>
        <a-animation
          attribute='position'
          dur='15000'
          from='0 10 -100'
          to='0 10 100'
          repeat='indefinite'
        />
      </a-entity>

      <a-collada-model scale='0.5 0.8 0.5' src='#fern' position='0.8 0 -1.4' />
      <a-collada-model scale='0.7 0.6 0.7' src='#fern' position='-1.1 0 -3' />
      <a-collada-model scale='1 1 1' src='#fern' position='2.5 0 -6' />

      <a-collada-model scale='2.3 1.2 1.6' src='#stall' position='1.2 0 1' rotation='0 180 0'/>

      </a-scene>
    );
  }
};

module.exports = DinoScene;

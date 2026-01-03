import type { FootballPitchVariables } from '@/models/football.pitch.variables.model'

export class FootballPitchTemplate {
  apply (vars: FootballPitchVariables): string {
    return templateSVG(vars.length, vars.width, vars.linesWidth, vars.extraSpace, vars.percentageShown)
  }
}

function templateSVG (
  pitch_length: number,
  pitch_width: number,
  pitch_lines_width: number,
  extra_space: number,
  pitch_percentage_shown = 0.8,
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!--
Measurement based on https://www.youtube.com/watch?v=rJg9wOQ7Qtg

Constants:
  $\{pitch_length}: The length of the pitch.
  $\{pitch_width}: The width of the pitch.
  $\{pitch_grass_cut_width}: The roller mower's width that produces a different color effect in the grass.
  $\{pitch_lines_width}: The width of the lines.
  $\{pitch_percentage_shown}: The percentage of the pitch that is shown.
  $\{extra_space}: Extra space between the side lines and the end of the pitch.
pitch is $\{pitch_width}/$\{pitch_length}, but we give $\{extra_space} units extra on each side.
$viewBox = "0 0 ($pitch_width + 2*$extra_space) ($pitch_length + 2*$extra_space)"
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  role="img"
  aria-labelledby="title"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 ${pitch_width + 2 * extra_space} ${pitch_percentage_shown * (pitch_length + 2 * extra_space)}">
  <title id="title">Football pitch</title>

  <defs>
    <linearGradient id="grass1">
      <stop stop-color="#3E7B3E"/>
    </linearGradient>
    <linearGradient id="grass2">
      <stop stop-color="#4A934A"/>
    </linearGradient>
    <pattern id="net" x="0" y="0" width="0.02" height="0.02">
      <path stroke-width="0.01" stroke="yellow" d="M 0 0 L 7.32 0"/>
      <path stroke-width="0.01" stroke="yellow" d="M 0 0 L 0 2.44"/>
    </pattern>
  </defs>

  <rect id="pitch-part-1" width="100%" height="3" fill="url(#grass1)"/>
  <rect id="pitch-part-2" width="100%" height="6" y="3" fill="url(#grass2)"/>
  <rect id="pitch-part-3" width="100%" height="6" y="9" fill="url(#grass1)"/>
  <rect id="pitch-part-4" width="100%" height="6" y="15" fill="url(#grass2)"/>
  <rect id="pitch-part-5" width="100%" height="6" y="21" fill="url(#grass1)"/>
  <rect id="pitch-part-6" width="100%" height="6" y="27" fill="url(#grass2)"/>
  <rect id="pitch-part-7" width="100%" height="6" y="33" fill="url(#grass1)"/>
  <rect id="pitch-part-8" width="100%" height="6" y="39" fill="url(#grass2)"/>
  <rect id="pitch-part-9" width="100%" height="6" y="45" fill="url(#grass1)"/>
  <rect id="pitch-part-10" width="100%" height="6" y="51" fill="url(#grass2)"/>
  <rect id="pitch-part-11" width="100%" height="6" y="57" fill="url(#grass1)"/>
  <rect id="pitch-part-12" width="100%" height="6" y="63" fill="url(#grass2)"/>
  <rect id="pitch-part-13" width="100%" height="6" y="69" fill="url(#grass1)"/>
  <rect id="pitch-part-14" width="100%" height="6" y="75" fill="url(#grass2)"/>
  <rect id="pitch-part-15" width="100%" height="6" y="81" fill="url(#grass1)"/>
  <rect id="pitch-part-16" width="100%" height="6" y="87" fill="url(#grass2)"/>
  <rect id="pitch-part-17" width="100%" height="6" y="93" fill="url(#grass1)"/>
  <rect id="pitch-part-18" width="100%" height="6" y="99" fill="url(#grass2)"/>
  <rect id="pitch-part-19" width="100%" height="6" y="105" fill="url(#grass1)"/>
  <rect id="pitch-part-20" width="100%" height="6" y="111" fill="url(#grass2)"/>
  <rect id="pitch-part-21" width="100%" height="6" y="117" fill="url(#grass1)"/>
  <rect id="pitch-part-22" width="100%" height="6" y="123" fill="url(#grass2)"/>

  <!--
  Grouping pitch lines
  @pitch-change: if we want to change the dimensions of the pitch, transform="translate(3 3)"
  needs to change according to the view port, if for example we want to leave 3 units (on each side)
  as an extra space between the lines and the end of the svg, then we need to put as view port
  transform="translate($extra_space $extra_space)"
   -->
  <g id="pitch-lines" fill="none" stroke="white" stroke-width="${pitch_lines_width}" transform="translate(${extra_space} ${extra_space})">
    <!--
    @pitch-change: d="M 0 0 h $pitch_width v $pitch_length h -90 Z"
    -->
    <path id="border" d="M 0 0 h ${pitch_width} v ${pitch_length} h -${pitch_width} Z" />
    <!--
    @pitch-change: d="M 0 $pitch_length/2 h $pitch_width"
    -->
    <path id="center-line" d="M 0 ${pitch_length / 2} h ${pitch_width}" />
    <!--
    @pitch-change: cx="$pitch_width/2" cy="$pitch_length/2"
    -->
    <circle id="center-circle" r="9.1" cx="${pitch_width / 2}" cy="${pitch_length / 2}" />
    <!--
    @pitch-change: cx="($\{pitch_width}/2" cy="$\{pitch_length}/2"
    -->
    <circle id="center-point" r="${pitch_lines_width * 2}" cx="${pitch_width / 2}" cy="${pitch_length / 2}" fill="white" />

    <g id="penalty-up" >
      <!--
      @pitch-change: x="transform: translate($pitch_width/2-7.32/2), -.2.5)"
      -->
      <g id="goal" transform="translate(${(pitch_width - 7.32) / 2} -2.5)">
        <path id="goal-frame" fill="url(#net)" stroke-width="0.2" d="M 0 2.44 L 0 0 L 7.32 0 L 7.32 2.44" />
      </g>
      <!--
      @pitch-change: d="M ($\{pitch_width}/2 - 40.32/2) 0 v 16.5 h 40.32 v -16.5"
      -->
      <path id="penalty-area" d="M ${(pitch_width - 40.32) / 2} 0 v 16.5 h 40.32 v -16.5" />
      <!--
      @pitch-change: d="M ($pitch_width/2 - 18.32/2) 0 v 16.5 h 40.32 v -16.5"
      -->
      <path id="penalty-goal-area" d="M ${(pitch_width - 18.32) / 2} 0 v 5.5 h 18.32 v -5.5" />
      <!--
      @pitch-change: cx="$pitch_width/2"
      -->
      <circle id="penalty-spot" r="${pitch_lines_width * 2}" cx="${pitch_width / 2}" cy="11" stroke="none" fill="white" />
      <!--
      @pitch-change: d="M $\{(pitch_width - 9.1) }/2 - 9.1/2) 16.5 a 9.1 9.1 0 0 0 9.1 0"
      -->
      <path id="penalty-arc" d="M ${(pitch_width - 9.1) / 2} 16.5 a 9.1 9.1 0 0 0 9.1 0" />
    </g>
    <!--
    @pitch-change: transform="rotate(180, $pitch_width/2, $pitch_length/2)"
    -->
    <use xlink:href="#penalty-up" transform="rotate(180, ${pitch_width / 2}, ${pitch_length / 2})" />
    <g id="corner-arcs" fill="none" stroke="white">
      <!--
      @pitch-change: d="M 0 1 a 3 3 0 0 0 1 -1M"
      -->
      <path id="corner-arc-left-up" d="M 0 1 a 3 3 0 0 0 1 -1M" />
      <use id="corner-arc-right-down" xlink:href="#corner-arc-left-up" transform="translate(${pitch_width} ${pitch_length}) rotate(180, 0, 0)" />
      <use id="corner-arc-right-up" xlink:href="#corner-arc-left-up" transform="translate(${pitch_width} 0) rotate(90, 0, 0)" />
      <use id="corner-arc-left-down" xlink:href="#corner-arc-left-up" transform="translate(0 ${pitch_length}) rotate(270, 0, 0)" />
    </g>
  </g>
</svg>`
}

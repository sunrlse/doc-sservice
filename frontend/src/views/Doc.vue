<template>
  <div class="wrapper">
    <div>document</div>
    <!-- <div class="vditor-reset"> -->
      <div class="vditor-reset" v-html="content"></div>
      <!-- <vue-markdown class="vditor-reset" :source="content"></vue-markdown> -->
    <!-- </div> -->
  </div>
</template>
<script>
// import VueMarkdown from 'vue-markdown'
import axios from 'axios'
export default {
  components: {
    // VueMarkdown
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.content = ''
    this.getPage()
  },  
  methods: {
    getPage() {
      axios.get(
        'http://localhost:8087/api/v1/md/1?id=abc'
      ).then(res => {
        if (res.data.code == 0) {
          this.content = res.data.html
        }
      })
    }
  }
}
</script>
<style lang="scss">
.wrapper {
  padding-left: 220px;
}
.vditor-reset {
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", "Hiragino Sans GB", "Microsoft Yahei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", "EmojiSymbols";
  margin: 0;
  // white-space: pre-wrap; // !  pre 空行 会渲染出来
  height: 100%;
  box-sizing: border-box;
  color: #24292e;
  font-variant-ligatures: no-common-ligatures;
  line-height: 1.5;
  font-size: 16px;
  overflow: auto;
  word-break: break-word;

  ul ul ul {
    list-style-type: square;
  }

  ul ul {
    list-style-type: circle;
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol {
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  audio {
    max-width: 100%;

    &:focus {
      outline: none;
    }
  }

  video {
    max-height: 90vh;
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }

  img.emoji {
    cursor: auto;
    max-width: 20px;
    vertical-align: sub;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;

    &:hover .vditor-anchor svg {
      visibility: visible;
    }
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 1.75em;
    border-bottom: 1px solid #eaecef;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.55em;
    border-bottom: 1px solid #eaecef;
  }

  h3 {
    font-size: 1.38em;
  }

  h4 {
    font-size: 1.25em
  }

  h5 {
    font-size: 1.13em;
  }

  h6 {
    font-size: 1em;
  }

  hr {
    height: 2px;
    padding: 0;
    margin: 24px 0;
    background-color: #eaecef;
    border: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #eaecef;
    margin: 0 0 16px 0;

    & > :first-child {
      margin-top: 0
    }

    & > :last-child {
      margin-bottom: 0
    }
  }

  ins > iframe {
    border: 0;
  }

  iframe {
    border: 1px solid #d1d5da;
    max-width: 100%;
    box-sizing: border-box;

    &.iframe__video {
      min-width: 80%;
      min-height: 36vh;
    }
  }

  table {
    border-collapse: collapse;
    empty-cells: show;
    margin-bottom: 16px;
    overflow: auto;
    border-spacing: 0;

    tr {
      background-color: #fafbfc;
      border-top: 1px solid #c6cbd1;
    }

    td,
    th {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
      word-break: normal;
    }

    th {
      font-weight: 600;
    }

    tbody tr:nth-child(2n) {
      background-color: #fff;
    }
  }

  code:not(.hljs):not(.highlight-chroma) {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
    // font-family: $font-family-code;
    word-break: break-word;
    background-size: 20px 20px;
    white-space: pre-wrap;
    background-color: rgba(27, 31, 35, .05);

    &.language-mermaid,
    &.language-math,
    &.language-graphviz,
    &.language-echarts,
    &.language-mindmap {
      background-color: rgba(27, 31, 35, .02);
    }
  }

  pre {
    margin: 1em 0;
  }

  pre > code {
    margin: 0;
    font-size: 85%;
    padding: 0.5em;
    border-radius: 5px;
    display: block;
    overflow: auto;
    white-space: pre;
    // font-family: $font-family-code;
    background-size: 20px 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==);
    word-break: initial;
    word-wrap: normal;
  }

  pre:hover div.vditor-copy {
    display: block;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  summary {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  svg {
    height: auto;
    width: auto;
    stroke-width: initial;
  }

  p:last-child,
  blockquote:last-child,
  pre:last-child,
  ul:last-child,
  ol:last-child,
  hr:last-child {
    margin-bottom: 0;
  }

}


.vditor-reset {
  h1, h2 {
    border-bottom: 0;
  }
}


</style>

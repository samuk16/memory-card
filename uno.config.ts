import { defineConfig } from "unocss";
import { presetUno } from "unocss";
import { presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  rules: [
    [
      /^dinamic-bg-(.*)$/,
      ([, d]) => {
        const img = d.split("-")[0];
        const type = d.split("-")[1];
        return {
          "background-image": `url('/src/assets/${img}.${type}')`,
        };
      },
    ],
  ],
  theme: {
    fontFamily: {
      beaufort: "beaufort",
      spiegel: "spiegel",
    },
  },
  preflights: [
    {
      getCSS() {
        return `
      @font-face {
        font-family: beaufort;
        src: url(src/assets/fonts/BeaufortforLOL-Bold.ttf);
      }
      @font-face {
        font-family: spiegel;
        src: url(src/assets/fonts/Spiegel_TT_Regular.ttf);
      }
     `;
      },
    },
  ],
});

import { renderToString } from "preact-render-to-string";

import { html } from "utils/html.ts";
import { output } from "utils/path.ts";
import { write } from "utils/fs.ts";

import { Layout } from "components/Layout.tsx";
import { Talk } from "components/Talk.tsx";

function Talks() {
  return (
    <Layout>
      <Talk
        title="Nova Engine - Building a DOD JS Engine in Rust"
        description="Focuses on how JavaScript engines work in general, and what sort of design choices Nova makes in this context."
        speaker={{
          name: "Aapo Alasuutari",
          url: "https://github.com/aapoalas",
        }}
        event={{
          name: "Finland Rust-lang group meetup",
        }}
        slides={[{
          name: "Slides",
          url:
            "https://docs.google.com/presentation/d/1PRinuW2Zbw9c-FGArON3YHiCUP22qIeTpYvDRNbP5vc/edit?usp=sharing",
        }]}
        youtubeId="WKGo1k47eYQ"
        date={Temporal.PlainDate.from("2024-01-13")}
      />
      <Talk
        title="Nova JavaScript Engine - Exploring a Data-Oriented Engine Design"
        description="Focuses on the details of why a data-oriented engine design is interesting, what sort of benefits it gives and what sort of costs it has. Explores the engine at a slightly deeper level.

          The talk was revisited at the TC39 June meeting, 2024. No video is available, but the slightly modified slides are."
        speaker={{
          name: "Aapo Alasuutari",
          url: "https://github.com/aapoalas",
        }}
        event={{
          name: "Web Engines Hackfest 2024",
          url: "https://webengineshackfest.org/2024/",
        }}
        slides={[{
          name: "Slides",
          url:
            "https://docs.google.com/presentation/d/1YlHr67ZYCyMp_6uMMvCWOJNOUhleUtxOPlC0Gz8Bg7o/edit?usp=sharing",
        }, {
          name: "TC39 slides",
          url:
            "https://docs.google.com/presentation/d/1Pv6Yn2sUWFIvlLwX9ViCjuyflsVdpEPQBbVlLJnFubM/edit?usp=sharing",
        }]}
        youtubeId="5olgPdqKZ84"
        date={Temporal.PlainDate.from("2024-06-03")}
      />
    </Layout>
  );
}

if (import.meta.main) {
  await write(
    output(import.meta.url),
    html(renderToString(<Talks />), { title: "Nova" }),
  );
}

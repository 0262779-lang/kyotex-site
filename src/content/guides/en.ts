// English guides, written for footwear and leather goods plants in the US and
// Canada. Kyotex facts come from the existing site and from what ALC and Kyotex
// publish; everything else is general industry knowledge, with no made-up figures.
import type { GuideId } from "@/content/routes";
import type { GuideCopy } from "@/content/guides/types";

export const GUIDES_EN: Record<GuideId, GuideCopy> = {
  solvents: {
    title: "How to Remove Solvents from Insole Bonding | Kyotex",
    description:
      "Replace solvent-based shoe cement in insole bonding with PSA insole adhesive tape, hot melt or cold bonding: how to choose, run a pilot and measure results.",
    h1: "How to remove solvents from insole bonding",
    lead: "Insole bonding is one of the most repeated operations in a footwear plant — and when it runs on solvent-based cement, one of the biggest sources of fumes on the floor. This guide covers the alternatives, how to choose between them and how to make the switch without slowing production.",
    cardText:
      "The three alternatives to solvent-based cement, how to choose between them and how to switch step by step.",
    sections: [
      {
        heading: "What solvent-based insole bonding really costs",
        blocks: [
          "In the conventional process, operators brush, roll or spray shoe cement onto the insole, inside the shoe, or both. The cement is a polymer dissolved in organic solvents, so the parts can't be joined until most of that solvent flashes off. Only then is the insole placed and pressed.",
          "That routine carries costs that rarely show up on the production sheet:",
          {
            list: [
              "**Fumes on the floor.** What flashes off are volatile organic compounds (VOCs) that operators breathe and that leave the building through your exhaust.",
              "**Fire risk.** Most of these solvents are flammable, so storage and application areas need special precautions.",
              "**Flash-off time.** Every pair waits for the cement to be ready.",
              "**Cleanup and waste.** Brushes, pots and equipment get cleaned with more solvent, and cement that skins over in the container is thrown away.",
            ],
          },
          "There's a compliance side too. In the United States, OSHA sets workplace exposure limits for many common solvents, and VOC emissions fall under federal, state and local air-quality rules; in Canada, federal and provincial rules apply. Taking solvent out of insole bonding addresses all of this at once — and because it happens on every pair, the change shows up across the whole line.",
        ],
      },
      {
        heading: "Three solvent-free alternatives",
        blocks: [
          "There are three ways to bond insoles without flashing off solvent, and Kyotex works with all three.",
          { h3: "Pressure-sensitive insole adhesive tape" },
          "A pressure-sensitive adhesive (PSA) arrives as a solid, usually on tape, and bonds when pressed. The [K System](/en/systems/k-system) line is made up of solid, cold adhesives that activate under pressure. The tape is applied to the material with machines such as the KYO100S or KYO101, which handle widths up to 145 mm (about 5.7 in); at the bonding station, operators simply place the part and press. It's clean, immediate insole bonding: no ovens, no open flames and no solvent flash-off.",
          { h3: "Hot melt adhesive" },
          "A hot melt is a thermoplastic polymer that melts with heat, is pressed and sets as it cools. [K Thermo](/en/systems/k-thermo) hot melts come as granules, powder, film, web and net. According to Kyotex, insole bonding is where powder hot melts perform at their best. You need a heat and pressure source, but there's no solvent to evaporate.",
          { h3: "Cold bonding with structural strength" },
          "Some materials need a strong bond but can't take heat. That's what [K Next](/en/systems/k-next) is for: the bond strength of a hot melt without heating the part. ALC introduced it as a polyurethane-based adhesive tape for structural bonding.",
        ],
      },
      {
        heading: "How to choose between them",
        blocks: [
          "Before you request samples, work through these questions with your production team:",
          {
            ordered: true,
            list: [
              "**What are you bonding?** Note the insole material and the surface it goes onto: textile, board, foam, leather or synthetics.",
              "**Can those materials take heat?** If anything might warp, shrink or mark at temperature, rule out hot melt and compare PSA tape with K Next.",
              "**How strong does the bond need to be?** A comfort sock liner doesn't need the same bond as a part that has to survive daily wear.",
              "**What equipment do you have?** Heated presses already on the floor make hot melt attractive. Without them, PSA tape avoids adding heat equipment.",
              "**What's your volume?** It determines the application machine and how adhesive is supplied to the line.",
            ],
          },
          "With those answers, a specialist can suggest one or two options to test. For a deeper side-by-side, read [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive).",
        ],
      },
      {
        heading: "Making the switch, step by step",
        blocks: [
          {
            ordered: true,
            list: [
              "**Pick a pilot style.** Start with a high-volume style and familiar materials, not your most difficult product.",
              "**Agree on how you'll judge it.** Settle with quality which adhesion tests and visual checks you'll use to compare against the current process.",
              "**Test on the line, not just in the lab.** Run a short production with your regular operators and log cycle times, rejects and feedback.",
              "**Dial in the equipment.** Pressure, tape alignment or temperature — depending on the technology — get calibrated to your line. Kyotex designs the machine and the adhesive together to make that easier.",
              "**Train and document.** Write up the new work instruction, including adhesive storage, and train every shift.",
              "**Scale in stages.** Move the remaining styles over once the pilot is stable.",
            ],
          },
        ],
      },
      {
        heading: "What to measure",
        blocks: [
          "The simplest metric is already in your purchasing records: **pounds or gallons of solvent-based cement bought each month**. If insole bonding stops using it, that number drops. Other useful indicators:",
          {
            list: [
              "Cycle time per pair at the insole station.",
              "Rejects for delamination or cement stains.",
              "Cleaning solvent consumption.",
              "Operator feedback on odor and working conditions.",
            ],
          },
          "If your plant tracks emissions or runs exposure monitoring, compare results before and after the change. For a plant-wide plan, see [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory).",
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            list: [
              "**Switching everything at once.** A well-run pilot saves you problems across the line.",
              "**Testing on dirty surfaces.** Dust, oil and moisture hurt any adhesive; check part cleanliness before judging results.",
              "**Ignoring storage.** Every adhesive has its own storage conditions; follow the manufacturer's instructions.",
              "**Judging only in the first hour.** Some bonds keep building strength over time; also test after the dwell time your quality team specifies.",
              "**Leaving operators out.** They're the first to notice whether a station is easier or slower, so involve them from the pilot on.",
            ],
          },
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          "See our [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding) options, look at [Kyo shoe machinery](/en/machinery) or [request a quote](/en/contact#quote). Kyotex-Terlan North America works with footwear manufacturers in the US, Canada and Mexico.",
        ],
      },
    ],
  },

  hotmelt: {
    title: "Hot Melt vs. Solvent-Based Shoe Adhesive | Kyotex",
    description:
      "Hot melt adhesive for footwear vs. solvent-based shoe cement: how each works, VOCs, cycle time, equipment, materials, safety and when each one makes sense.",
    h1: "Hot melt vs. solvent-based shoe adhesive",
    lead: "Both bond footwear components, but they work in opposite ways: one depends on a solvent evaporating, the other on heat. Understanding that difference tells you where each belongs in your plant — and where to start switching.",
    cardText:
      "How each one works and how they compare on VOCs, cycle time, equipment, materials and safety.",
    sections: [
      {
        heading: "How solvent-based shoe cement works",
        blocks: [
          "Solvent-based cement is a polymer — polychloroprene (neoprene) or polyurethane, for example — dissolved in organic solvents. It goes on wet by brush, roller, spray gun or machine, and a bond is only possible once most of the solvent has flashed off. Many processes coat both surfaces, let them dry for the specified open time, then join and press them; others reactivate the dried film with heat before joining.",
          "It's familiar and versatile, which is why so many plants still run it. The hidden cost is the solvent itself: you buy it, it evaporates, and then it has to be managed.",
        ],
      },
      {
        heading: "How a hot melt adhesive works",
        blocks: [
          "A hot melt is a thermoplastic polymer with no solvent in it. Kyotex sums up the process in three steps: **melt, press, cool**. Heat makes the adhesive flow, pressure brings it into contact with both surfaces, and the bond is formed as it cools.",
          "[K Thermo](/en/systems/k-thermo) hot melts come as granules, powder, film, web and net. The powder range includes TPU, PES, PBS — a biodegradable option — and EVA, and Kyotex points to insole bonding as the application where powder hot melts perform at their best.",
        ],
      },
      {
        heading: "Hot melt formats",
        blocks: [
          "The same adhesive chemistry can arrive in very different forms, each suited to a process. K Thermo comes in five:",
          {
            list: [
              "**Granules:** melted in equipment before application.",
              "**Powder:** scattered over the material and activated in the press — the format Kyotex highlights for insole bonding.",
              "**Film:** a continuous adhesive layer placed between the parts.",
              "**Web:** a fine mesh of adhesive fibers.",
              "**Net:** an open adhesive mesh.",
            ],
          },
          "The right one depends on your materials, your equipment and how the adhesive needs to be distributed across the part.",
        ],
      },
      {
        heading: "Side by side",
        blocks: [
          { h3: "VOCs and air quality" },
          "With cement, what flashes off is volatile organic compounds that stay in the plant air or leave through your exhaust — and that air-quality rules in the US and Canada keep an eye on. A hot melt has no solvent to evaporate; the main precaution is running it at the temperature the manufacturer specifies.",
          { h3: "Cycle time" },
          "Cement needs open time before bonding and, depending on the formula, more time to reach full strength. With a hot melt, the cycle is heat, press and cool, with no waiting for evaporation.",
          { h3: "Equipment" },
          "Cement needs applicators, fume extraction and sometimes drying or reactivation tunnels. A hot melt needs a heat and pressure source suited to its format: a press, a laminator or an applicator.",
          { h3: "Materials" },
          "This is the main limitation of hot melt: the materials have to tolerate the activation temperature. If they can't, there are cold options such as [K System](/en/systems/k-system) PSA tape or [K Next](/en/systems/k-next).",
          { h3: "Storage and safety" },
          "Solvent-based cements are typically flammable liquids that call for special storage and handling. Hot melts are solid at room temperature; the main hazard is the hot surfaces of the equipment.",
          { h3: "Cleanup and waste" },
          "Cement means cleaning tools with more solvent and discarding what dries in the pot. With a solid hot melt, there are no open containers and no solvent cleanup.",
        ],
      },
      {
        heading: "When each one makes sense",
        blocks: [
          "Hot melt is usually the better fit when:",
          {
            list: [
              "Your materials can take the heat.",
              "You already run presses or laminators, or can add them.",
              "You want to cut VOCs and waiting time.",
              "The operation is repetitive, like [insole bonding](/en/applications/solvent-free-insole-bonding) or [lamination](/en/applications/lamination).",
            ],
          },
          "Solvent-based cement tends to stay when:",
          {
            list: [
              "The operation doesn't yet have a proven alternative in your plant.",
              "The materials or part geometry make even heat and pressure hard to apply.",
              "A customer specifies a method that hasn't been validated with another technology yet.",
            ],
          },
          "Most plants don't switch everything at once. They start where the alternative is clearest and keep cement where there's no validated replacement yet.",
        ],
      },
      {
        heading: "What if the material can't take heat?",
        blocks: [
          "Then the real comparison isn't cement versus hot melt — it's cement versus cold bonding. There are two routes: pressure-sensitive tape, which bonds with pressure alone, and K Next, which aims for hot melt strength without heat. Both are covered in [what a PSA adhesive is](/en/guides/what-is-a-psa-adhesive-in-footwear) and [cold insole bonding](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
        ],
      },
      {
        heading: "What to ask before you switch",
        blocks: [
          "Before requesting hot melt samples, get these answers from your supplier:",
          {
            list: [
              "The recommended activation temperature, pressure and time.",
              "Which materials it's compatible with, and which it isn't.",
              "Which format suits the equipment you already run.",
              "How it should be stored and how long it keeps.",
              "Its Safety Data Sheet (SDS).",
            ],
          },
          "With that in hand, you can plan the trial without surprises.",
        ],
      },
      {
        heading: "How to run a fair trial",
        blocks: [
          {
            ordered: true,
            list: [
              "Use the same materials and the same style you produce today.",
              "Define up front the adhesion and appearance checks your quality team will apply.",
              "Set temperature, pressure and time to the adhesive manufacturer's instructions.",
              "Test after your normal dwell time, not just straight out of the press.",
              "Log cycle time per pair and rejects for both methods.",
            ],
          },
          "If you'd like help designing the trial, [get in touch](/en/contact#quote). A Kyotex specialist can advise on the format and equipment, and [Kyo machinery](/en/machinery) is engineered together with the adhesive to make setup easier.",
        ],
      },
    ],
  },

  psa: {
    title: "What Is a PSA Adhesive in Footwear? | Kyotex",
    description:
      "What a pressure-sensitive adhesive (PSA) is, how it bonds without solvent or heat, and how insole adhesive tape is used in footwear and leather goods.",
    h1: "What is a PSA adhesive, and how is it used in footwear?",
    lead: "PSA stands for pressure-sensitive adhesive — the kind of adhesive you find on self-adhesive tape. It arrives ready to use and bonds with nothing more than pressure. In footwear and leather goods, that means bonding without solvents, without heat and without waiting.",
    cardText:
      "How pressure-sensitive adhesives bond, where they're used in footwear and leather goods, and their limits.",
    sections: [
      {
        heading: "What a pressure-sensitive adhesive is",
        blocks: [
          "A pressure-sensitive adhesive stays tacky in its dry form and bonds when pressed against a surface. It doesn't need water, solvent or heat to activate. That's exactly how Kyotex describes its [K System](/en/systems/k-system) line: solid, cold adhesives activated by pressure.",
          "The difference from liquid cement is fundamental. With solvent-based cement, the adhesive layer forms on your floor as the solvent evaporates. With a PSA, the adhesive film is already formed; on the line, you just place it and press.",
          "Think of a can of contact cement next to a roll of double-sided tape: both bond, but only one needs drying time and a brush.",
        ],
      },
      {
        heading: "How the bond forms",
        blocks: [
          "Under pressure, the adhesive flows into the small irregularities of the surface until it makes close contact. Three things matter:",
          {
            list: [
              "**Pressure:** firm, even pressure improves contact.",
              "**Surface:** it has to be clean and dry; dust, oil and moisture reduce adhesion.",
              "**Time:** with many PSAs, the bond keeps building strength for a while after it's applied.",
            ],
          },
        ],
      },
      {
        heading: "How it's supplied",
        blocks: [
          "Across industries, PSAs usually come on tape, protected by a release paper or film that's peeled off just before bonding. Kyotex supplies its PSA adhesives on tape and applies them with its own machinery; on the equipment you'll see the rolls loaded and, for insole bonding, tape printed with the outline of each insole.",
          "On a roll, the adhesive is already metered: every inch of tape carries the same coating, which helps keep bonding consistent from pair to pair.",
        ],
      },
      {
        heading: "How it's used in footwear and leather goods",
        blocks: [
          { h3: "Insole bonding" },
          "This is the best-known use. Insole adhesive tape is applied to the insole material, and at the bonding station the operator places the insole and presses. Kyotex calls it clean, immediate insole bonding: no ovens, no open flames and no solvent flash-off. More in [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding).",
          { h3: "Leather goods" },
          "In leather goods, PSAs let you join parts without applying liquid adhesive. Kyotex has a dedicated machine, the KYO500, for applying medium and large PSA adhesives in leather goods, and in 2025 ALC introduced new equipment for applying adhesive to zippers. See [leather goods adhesives](/en/applications/leather-goods).",
          { h3: "Prep work off the line" },
          "Because the adhesive is already formed, tape can be applied at one stage and the bond made later. That lets you prepare parts off the production line and leave only the place-and-press step on the line itself. It also makes planning easier: parts can be prepped in batches when the schedule allows.",
        ],
      },
      {
        heading: "Machinery for applying PSA",
        blocks: [
          "To lay tape down evenly and at production speed, Kyotex uses Kyo equipment designed together with the adhesive:",
          {
            list: [
              "**KYO100S:** pneumatic, for self-aligning application of PSA adhesives up to 145 mm (about 5.7 in) wide.",
              "**KYO101:** electronically controlled, for self-aligning application of PSA adhesives up to 145 mm (about 5.7 in) wide.",
              "**KYO500:** for medium and large PSA adhesives in leather goods.",
            ],
          },
          "See the full lineup on our [shoe machinery](/en/machinery) page.",
        ],
      },
      {
        heading: "Fitting PSA tape into your line",
        blocks: [
          {
            ordered: true,
            list: [
              "**Decide where the tape gets applied.** It can be in a prep area or right on the line; what matters is that it's a fixed step in the process.",
              "**Apply it by machine.** Equipment such as the KYO100S or KYO101 lays the tape down aligned and with even pressure.",
              "**Protect prepared parts.** While they wait, keep them clean with the liner on.",
              "**At the station, peel, place and press.** That's the entire bonding step.",
              "**Check adhesion.** Run your quality team's usual tests.",
            ],
          },
        ],
      },
      {
        heading: "Strengths and limits",
        blocks: [
          "ALC describes tape-based bonding as a way to bring production concepts built on efficiency, environmental sustainability and respect for workers' health into footwear and leather goods. In practice, the clearest advantages are:",
          {
            list: [
              "No solvent to flash off and no open time.",
              "No heat, so it works for temperature-sensitive materials.",
              "An immediate bond on pressing.",
              "Less cleanup: no brushes and no pots of cement.",
              "Consistency: the amount of adhesive is set by the tape, not by an operator's brush.",
            ],
          },
          "There are limits worth testing for:",
          {
            list: [
              "Some surfaces, such as certain plastics or materials with special finishes, are harder to bond.",
              "The bond depends on applying enough pressure, evenly.",
              "Every adhesive has a service temperature range and storage conditions to respect.",
            ],
          },
          "When you need a structural bond without heat, Kyotex also offers [K Next](/en/systems/k-next).",
        ],
      },
      {
        heading: "Common questions about PSAs",
        blocks: [
          { h3: "Is the bond permanent?" },
          "It depends on the formula: some pressure-sensitive adhesives are permanent and others are designed to be removable. For footwear, the formula is chosen for what the part has to withstand, and confirmed by testing.",
          { h3: "Does it work on leather?" },
          "Yes. Kyotex uses PSA adhesives in leather goods, including medium and large parts with the KYO500.",
          { h3: "Do I need to buy machinery?" },
          "At production volumes, an application machine helps keep the tape even and aligned on every part. A specialist can recommend equipment for your volume.",
        ],
      },
      {
        heading: "PSA, hot melt or solvent cement at a glance",
        blocks: [
          {
            list: [
              "**PSA:** solid, cold, bonds with pressure.",
              "**Hot melt:** solid, bonds with heat and pressure ([K Thermo](/en/systems/k-thermo)).",
              "**Solvent-based cement:** liquid, bonds once the solvent flashes off.",
            ],
          },
          "To decide which fits, read [how to remove solvents from insole bonding](/en/guides/how-to-remove-solvents-from-insole-bonding) or [request a quote](/en/contact#quote) — a Kyotex specialist will help you choose the tape and the equipment.",
        ],
      },
    ],
  },

  voc: {
    title: "How to Reduce VOC Emissions in a Shoe Factory | Kyotex",
    description:
      "A practical plan to cut volatile organic compound (VOC) emissions in a footwear plant: solvent inventory, solvent-free adhesives, controls and measurement.",
    h1: "How to reduce VOC emissions in a shoe factory",
    lead: "In a footwear plant, a large share of volatile organic compounds comes from solvent-based cements, cleaners and finishes. This guide lays out a five-step plan to cut them, starting where it usually matters most: replacing solvent in bonding operations.",
    cardText:
      "Where VOCs come from in a footwear plant, and a five-step plan to reduce them.",
    sections: [
      {
        heading: "What VOCs are and where they come from",
        blocks: [
          "Volatile organic compounds (VOCs) are carbon-based chemicals that evaporate easily at room temperature. In footwear manufacturing they come mostly from solvent-based products:",
          {
            list: [
              "Cements for insole bonding, lasting, sole attaching and assembly.",
              "Primers and halogenating agents used to prepare surfaces.",
              "Cleaners and solvents for washing tools and equipment.",
              "Inks, paints and finishes.",
            ],
          },
          "Every time a container is left open or a coat of cement goes on, some of that solvent ends up in the plant air.",
        ],
      },
      {
        heading: "Why it's worth reducing them",
        blocks: [
          {
            list: [
              "**Worker health.** Breathing solvent vapors day after day is a risk for the people on the line. In the US, OSHA sets permissible exposure limits for many common solvents.",
              "**Safety.** Most of these solvents are flammable, so less solvent on the floor means less fire risk.",
              "**Air quality.** VOCs contribute to ground-level ozone and smog, which is why the US EPA and state and local air agencies regulate them.",
              "**Compliance.** Some states and air districts, notably in California, limit the VOC content of adhesives; in Canada, federal and provincial rules apply. Check what applies to your facility.",
              "**Customers.** Some brands ask their suppliers how they manage the chemicals they use.",
              "**Odor.** Less solvent on the floor also means less solvent odor throughout the plant.",
            ],
          },
        ],
      },
      {
        heading: "Step 1: inventory your solvents",
        blocks: [
          "You can't reduce what you don't measure. List every solvent-containing product that comes into the plant and, for each one, note:",
          {
            list: [
              "Which operation uses it.",
              "How much you buy per month, in gallons or pounds.",
              "What its Safety Data Sheet (SDS) and technical data sheet say about solvent or VOC content and hazards.",
            ],
          },
          "A simple spreadsheet is enough: one row per product, with the operation, monthly use and solvent content from its data sheets.",
          "Sort the list from highest to lowest use. It's common for a handful of operations to account for most of the solvent — that's where to focus.",
        ],
      },
      {
        heading: "Step 2: substitute wherever there's an alternative",
        blocks: [
          "Of all the measures available, removing solvent from an operation is the most effective, because VOCs that never enter the plant don't need to be controlled later. These are the substitutions Kyotex offers:",
          {
            list: [
              "**Insole bonding:** PSA insole adhesive tape ([K System](/en/systems/k-system)), hot melt powder or film ([K Thermo](/en/systems/k-thermo)) or cold bonding ([K Next](/en/systems/k-next)). See [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding).",
              "**Reinforcements:** [K Pads](/en/systems/k-pads) toe puffs, counters and microfibers, made from materials treated with Kyotex adhesives that, according to the brand, ensure no solvents and no VOCs.",
              "**Lamination:** hot melt film, web, net or powder. See [lamination](/en/applications/lamination).",
              "**Leather goods:** PSA tapes and hot melts. See [leather goods adhesives](/en/applications/leather-goods).",
            ],
          },
          "Start with the highest-use operation that has a clear alternative, and pilot it before converting the whole line. If a substitution could affect how a product looks or performs, involve your customer early — especially when they specify materials or methods. [How to remove solvents from insole bonding](/en/guides/how-to-remove-solvents-from-insole-bonding) walks through the process.",
        ],
      },
      {
        heading: "Step 3: reduce and control what's left",
        blocks: [
          "Some operations will still need solvent for a while. There, good practice helps:",
          {
            list: [
              "Keep containers closed when they're not in use.",
              "Issue only the cement needed for the shift.",
              "Use applicators that put down just the right amount.",
              "Make sure bonding stations have proper ventilation and local exhaust.",
              "Train operators in safe solvent handling.",
              "Store flammables in a designated area.",
              "Clean up spills promptly and keep solvent-soaked rags in closed containers.",
            ],
          },
        ],
      },
      {
        heading: "Step 4: measure progress",
        blocks: [
          "Purchasing is the simplest indicator: if monthly use of solvent-containing products drops, so do the VOCs entering the plant. Back it up with:",
          {
            list: [
              "Gallons of cleaning solvent used per month.",
              "Worker exposure monitoring, if your plant does it.",
              "Emissions testing by a qualified lab when a regulator or customer asks for it.",
            ],
          },
          "Share progress with the team regularly; visible results help keep the change going.",
        ],
      },
      {
        heading: "Step 5: build it into the process",
        blocks: [
          "VOC reductions stick when they become part of how the plant works: put them in your procedures, in new-operator training and in how you select materials. Every new style is a chance to design it with eco-friendly adhesives from the start.",
          "Review the inventory at least once a year, and whenever a new product comes into the plant, so progress doesn't slip over time.",
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            list: [
              "**Relying on ventilation alone.** Exhaust improves the air at the station, but the solvent still leaves the building; substitution fixes the problem at the source.",
              "**Switching products without testing.** A new adhesive has to be validated with your materials before it goes line-wide.",
              "**Forgetting the cleaners.** Cleaning solvent counts too, and it's sometimes a big share of total use.",
              "**Leaving purchasing and quality out.** Purchasing controls what enters the plant and quality validates changes; without them, the plan stalls.",
              "**Skipping the baseline.** Without a starting measurement, you can't show how much use came down.",
            ],
          },
        ],
      },
      {
        heading: "Where to start with Kyotex",
        blocks: [
          "To compare technologies, read [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive). When you're ready for a recommendation for your plant, [request a quote](/en/contact#quote): a Kyotex specialist will review your operations and suggest where to begin.",
        ],
      },
    ],
  },

  cold: {
    title: "Cold Insole Bonding: What It Is and When to Use It | Kyotex",
    description:
      "What cold insole bonding is, how it works with PSA tape or K Next, when it beats hot melt and how to evaluate it on your footwear line.",
    h1: "Cold insole bonding: what it is and when to use it",
    lead: "Cold insole bonding means joining the insole without heating the adhesive or the material. It's the answer for temperature-sensitive materials and for lines that don't want to depend on heated presses — and it keeps the process solvent-free.",
    cardText:
      "How to bond insoles without heat, with PSA tape or K Next, and when it beats hot melt.",
    sections: [
      {
        heading: "What cold insole bonding is",
        blocks: [
          "Most adhesives need something to activate them: a solvent that evaporates, as with traditional shoe cement, or heat that melts them, as with hot melts. In cold insole bonding, the adhesive works without heat — it bonds with pressure, or with a system designed to deliver a structural bond at room temperature.",
          "The term distinguishes it from hot melt insole bonding, where the adhesive is melted with heat, and from traditional bonding with solvent-based cement. In practice it covers two different needs: quick, clean bonding of comfort insoles, and structural bonds on parts that can't be heated.",
          "Kyotex offers two cold bonding technologies, and both are solvent-free.",
        ],
      },
      {
        heading: "Two ways to bond insoles cold",
        blocks: [
          { h3: "Pressure-sensitive insole adhesive tape (K System)" },
          "[K System](/en/systems/k-system) pressure-sensitive adhesives are solid, work cold and bond when pressed. The tape is applied to the material with machines such as the KYO100S or KYO101; at the bonding station, operators just place and press. It's the most direct option when the insole needs a clean, immediate bond.",
          { h3: "Cold structural bonding (K Next)" },
          "[K Next](/en/systems/k-next) was created for products that need hot melt strength but can't be heated. ALC began producing it in 2024 and introduced it as a polyurethane-based adhesive tape for structural bonding, built for high-output production cells. It's the newest Kyotex line, and the option when a part needs hot melt strength but can't take heat.",
        ],
      },
      {
        heading: "What a cold insole station looks like",
        blocks: [
          "On a line running PSA tape, the work happens in two moments. First, the tape is applied to the material with an application machine, evenly and aligned. Then, at the insole station, the operator peels the liner, places the insole and presses.",
          "There's nothing to dry and no press to heat up, and the station stays free of brushes, pots and fumes. That's why cold insole bonding usually means a cleaner station, too.",
        ],
      },
      {
        heading: "Why avoid heat",
        blocks: [
          "Heat isn't always a problem, but there are good reasons to avoid it:",
          {
            list: [
              "**Temperature-sensitive materials.** Some foams, synthetics and finishes can warp, shrink, change sheen or mark when heated.",
              "**Parts with components already bonded.** Reheating can affect bonds or materials that are already in the part.",
              "**Lines without heated presses.** Working cold means no buying, heating up or maintaining that equipment.",
              "**Safety.** There are no hot surfaces at the insole station.",
              "**Warm-up time.** Heated presses take time to reach temperature at the start of a shift; cold bonding skips that step.",
              "**Simpler setup.** With PSA tape, pressure is the main variable at the station, which makes the work easier to standardize across shifts.",
            ],
          },
        ],
      },
      {
        heading: "When cold bonding makes sense",
        blocks: [
          "It's usually the best fit when:",
          {
            list: [
              "Your materials can't take a hot melt's activation temperature.",
              "You want to eliminate solvent without adding heat equipment.",
              "You need to prep parts off the line and bond them later.",
              "You want a simple insole station: place and press.",
              "You change styles often and want a station that's ready as soon as the shift starts.",
            ],
          },
          "A [K Thermo hot melt](/en/systems/k-thermo) is usually the better choice when:",
          {
            list: [
              "Your materials handle heat well.",
              "You already have presses or laminators to put to work.",
              "You're using formats such as powder, web or net, which activate with heat.",
            ],
          },
          "If you're weighing the two families, read [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive).",
        ],
      },
      {
        heading: "How to evaluate it on your line",
        blocks: [
          {
            ordered: true,
            list: [
              "**Check your materials.** Note the insole material and the surface it goes onto, and ask your material suppliers what temperature they tolerate.",
              "**Define the bond.** Comfort sock liner or structural bond? That decides between PSA tape and K Next.",
              "**Get samples and run a pilot.** Test on a high-volume style with your regular operators.",
              "**Evaluate with your quality team.** Use your usual adhesion tests and check the finished part's appearance.",
              "**Look at the application equipment.** [Kyo machinery](/en/machinery) is designed together with the adhesive to lay tape down evenly.",
            ],
          },
        ],
      },
      {
        heading: "Questions that come up",
        blocks: [
          { h3: "Does cold mean weaker?" },
          "Not necessarily. That's why K Next exists: to deliver hot melt strength without heat. The strength you need depends on the part and should be confirmed by testing.",
          { h3: "Does cold insole bonding use solvents?" },
          "No. Both PSA tape and K Next are solvent-free, just like hot melts.",
          { h3: "Can I mix technologies?" },
          "Yes. You can use a different technology for each style or operation; just validate each combination with your materials.",
          { h3: "What about leather goods?" },
          "The same principle applies: PSA tapes join leather parts without heat or solvents, and the KYO500 handles medium and large parts. See [leather goods adhesives](/en/applications/leather-goods).",
        ],
      },
      {
        heading: "Questions to ask before choosing",
        blocks: [
          {
            list: [
              "What's the maximum temperature my materials can take?",
              "Does the part need a structural bond or a comfort bond?",
              "At what stage of the process should the adhesive be applied?",
              "What application equipment do I need for my volume?",
              "How is the adhesive stored, and how long does it keep?",
            ],
          },
          "Bring these to your first conversation with a specialist; with the answers, a pilot can be put together.",
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          "Compare our [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding) options, read [what a PSA adhesive is](/en/guides/what-is-a-psa-adhesive-in-footwear) or [request a quote](/en/contact#quote). Kyotex-Terlan North America works with manufacturers across the US, Canada and Mexico.",
        ],
      },
    ],
  },
};

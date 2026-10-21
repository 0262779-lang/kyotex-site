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

  insoling: {
    title: "What Is Insole Bonding in Shoe Manufacturing? | Kyotex",
    description:
      "What insole bonding is, where it happens on a footwear line and how insoles are bonded: with solvent cement, PSA insole tape, hot melt or cold bonding.",
    h1: "What insole bonding is and how it's done in shoe manufacturing",
    lead: "Insole bonding is the step where the insole is permanently joined to the shoe. It looks simple, but it drives comfort, how the inside of the shoe looks and a good share of the solvent fumes on a factory floor. Here's what it involves, where it happens in the process and the methods available to do it well.",
    cardText:
      "What insole bonding involves, where it happens on the line and the methods for bonding insoles.",
    sections: [
      {
        heading: "Two parts called insoles",
        blocks: [
          "Most shoes have two components people call the insole:",
          {
            list: [
              "**The insole board:** the firm base the upper is lasted onto. It's attached to the last before lasting and ends up hidden inside the shoe.",
              "**The sock liner or comfort insole:** the layer the foot touches. It can include foam, textile or leather, and it goes in once the shoe is built.",
            ],
          },
          "On the factory floor, insoling usually refers to the second one: placing and bonding the sock liner inside the shoe. The principle is the same for both, though: a firm, even, clean bond that doesn't shift, wrinkle or come loose with wear.",
        ],
      },
      {
        heading: "Where it happens in the process",
        blocks: [
          "In cemented footwear construction, the usual sequence looks like this:",
          {
            ordered: true,
            list: [
              "**Cutting:** upper parts, linings and insoles are cut.",
              "**Stitching:** the upper parts are sewn together.",
              "**Lasting:** the upper is pulled over the last and attached to the insole board.",
              "**Sole attaching:** the sole is bonded to the lasted shoe.",
              "**Delasting:** the last comes out.",
              "**Insoling and finishing:** the sock liner goes in, and the shoe is cleaned and prepared for packing.",
            ],
          },
          "Every plant has its own variations, but insoling almost always sits near the end of the line, when the shoe already looks finished. That's why mistakes here are so visible: a loose, wrinkled or stained sock liner goes straight to the customer.",
          "Other constructions, such as stitched or welted shoes, follow a different order, but the insole still has to be attached cleanly and firmly.",
        ],
      },
      {
        heading: "The traditional method",
        blocks: [
          "The conventional approach uses solvent-based shoe cement and runs roughly like this:",
          {
            ordered: true,
            list: [
              "Cement is brushed, rolled or sprayed onto the insole, inside the shoe, or both.",
              "Operators wait for enough of the solvent to flash off.",
              "The insole is placed and lined up with the shape of the shoe.",
              "It's pressed into place, by hand or in a press.",
            ],
          },
          "It works, but the costs repeat on every pair: solvent fumes on the line, waiting time, cleaning brushes and pots, and the risk of cement stains inside the shoe. We cover the alternatives in detail in [how to remove solvents from insole bonding](/en/guides/how-to-remove-solvents-from-insole-bonding).",
        ],
      },
      {
        heading: "Three solvent-free ways to bond insoles",
        blocks: [
          "Kyotex works with three technologies that bond insoles without flashing off solvent:",
          { h3: "Pressure-sensitive insole adhesive tape" },
          "[K System](/en/systems/k-system) tape carries a solid adhesive that works cold and bonds under pressure. It's applied to the material with machines such as the KYO100S or KYO101, which handle widths up to 145 mm (about 5.7 in). At the insole station, operators peel the liner, place the insole and press — no ovens, no open flames and no solvent flash-off.",
          { h3: "Hot melt adhesive" },
          "[K Thermo](/en/systems/k-thermo) hot melts melt with heat, are pressed and set as they cool. According to Kyotex, insole bonding is where powder hot melts perform at their best. You need a heat and pressure source, and materials that can handle the activation temperature.",
          { h3: "Cold bonding with structural strength" },
          "[K Next](/en/systems/k-next) delivers hot melt strength without heating the part. ALC introduced it as a polyurethane-based adhesive tape for structural bonding, built for high-output production cells.",
          "To compare the options side by side, see [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding).",
        ],
      },
      {
        heading: "Prepping insoles off the line",
        blocks: [
          "One advantage of pressure-sensitive tape is that it splits insoling into two moments. First, in a prep area, a machine applies the tape to the insole material, evenly and aligned. Then, on the line, the operator simply peels the liner, places the insole and presses.",
          "Because the adhesive is already formed, it can be applied today and bonded later. That lets you get ahead when you have capacity and leaves only the place-and-press step on the line, which is quick and fume-free.",
        ],
      },
      {
        heading: "What a good insole bond takes",
        blocks: [
          "Whatever the method, a few details make the difference:",
          {
            list: [
              "**A well-cut insole.** If it doesn't match the shape of the shoe, it wrinkles or lifts at the edges.",
              "**A clean, dry interior.** Dust, leftover cement or moisture reduce adhesion with any adhesive.",
              "**Good alignment.** The insole should sit centered, without overlapping or leaving gaps at the heel or toe.",
              "**Even pressure.** Pressure has to reach the whole surface, especially the toe and heel, where insoles tend to lift first.",
              "**Dwell time.** Some bonds keep building strength after pressing; follow the adhesive manufacturer's guidance before packing.",
              "**Consistent stations.** Use the same pressure and the same steps on every shift, so results don't depend on who's working.",
            ],
          },
        ],
      },
      {
        heading: "Common problems and how to spot them",
        blocks: [
          {
            list: [
              "**Lifting at the edges or heel:** usually too little pressure, too little adhesive in that area or a dirty surface.",
              "**Wrinkles or bubbles:** the insole didn't seat properly or doesn't match the shape of the shoe.",
              "**Cement stains:** almost always excess liquid cement squeezing out at the edges. With tape or hot melt, the amount of adhesive is already set.",
              "**Solvent odor in the finished shoe:** it can mean the solvent hadn't fully flashed off before packing.",
            ],
          },
          "Pulling a few random pairs each shift helps catch these problems before they reach customers — and tells you whether the fix lies in the adhesive, the equipment or the work method.",
        ],
      },
      {
        heading: "Choosing the method for your line",
        blocks: [
          "The right choice depends on your materials, whether they can take heat, the equipment you already have and your production volume. To go deeper, read [cold insole bonding: what it is and when to use it](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it) and [how to choose a shoe adhesive by material](/en/guides/how-to-choose-a-shoe-adhesive-by-material). If you run several styles, you don't need one method for all of them: match the method to the materials of each style.",
          "When you're ready for a recommendation for your line, [request a quote](/en/contact#quote). Kyotex-Terlan North America works with footwear manufacturers in the US, Canada and Mexico.",
        ],
      },
    ],
  },

  reinforcements: {
    title: "Toe Puffs and Heel Counters: What They Are | Kyotex",
    description:
      "What toe puffs and heel counters do in a shoe, what they're made of, how they're attached with heat or cold adhesives without solvents and what to check.",
    h1: "Toe puffs and heel counters: what they are and how they're attached",
    lead: "Toe puffs and heel counters are reinforcements most people never see, yet they define a shoe's shape: the toe puff holds the toe box and the counter holds the heel. This guide explains what they are, what they're made of and how they're attached — including a solvent-free option.",
    cardText:
      "What these reinforcements do, what they're made of and how they're attached, including solvent-free options.",
    sections: [
      {
        heading: "What a toe puff is",
        blocks: [
          "A toe puff — sometimes called a box toe — is the reinforcement at the front of the shoe, between the upper and the lining. It shapes the toe box and helps it keep that shape with wear, so it doesn't collapse every time the foot pushes forward.",
          "It isn't the same thing as a safety toe in work boots. A safety toe is protective equipment; a toe puff is a shaping reinforcement used across every kind of footwear.",
        ],
      },
      {
        heading: "What a heel counter is",
        blocks: [
          "The counter sits at the back of the shoe, also between the upper and the lining, wrapping the heel. It holds the shape of that area and keeps the foot stable inside the shoe.",
          "It takes a beating: every time someone slips a shoe on or off, the heel flexes. A well-chosen, well-attached counter keeps that area from breaking down over time. Counters are often molded so they follow the curve of the heel.",
        ],
      },
      {
        heading: "What they're made of",
        blocks: [
          "Reinforcements come in many materials. The Kyotex [K Pads](/en/systems/k-pads) unit develops reinforcement supports for footwear and leather goods, including:",
          {
            list: ["**Toe puffs.**", "**Leather fiber counters.**", "**Microfibers.**"],
          },
          "Kyotex makes them from natural and recycled materials treated with its hot melt or cold adhesives. According to the brand, that treatment ensures they contain no solvents and no volatile organic compounds (VOCs).",
          "Which material fits depends on how firm the part needs to be, the upper you're using and the comfort you're after: a reinforcement that's too stiff holds its shape well but can be uncomfortable, while one that's too soft won't hold the shape at all.",
        ],
      },
      {
        heading: "The reinforcement starts with the pattern",
        blocks: [
          "The shape and size of the toe puff and counter are set along with the pattern for the style. So when the last or the pattern changes, check the reinforcement too: a piece that worked well on one style can fall short, overlap or show through on another.",
          "The upper material matters as well. Thin uppers show reinforcement edges more easily than thick ones, and a very soft upper needs a reinforcement that holds the shape without making the shoe overly stiff.",
        ],
      },
      {
        heading: "How they're attached",
        blocks: [
          "There are three main ways to attach a reinforcement, depending on how its adhesive is activated:",
          { h3: "Solvent-activated" },
          "This is the traditional method for some reinforcements: the part is dipped in or wetted with solvent to soften and activate it, then placed and lasted. Like any solvent process, it puts fumes on the floor and adds waiting time.",
          { h3: "Hot melt coated" },
          "The reinforcement arrives with the adhesive already applied. It's activated with heat, placed between the upper and the lining and, once lasted and cooled, it's bonded and takes the shape of the last. There's no solvent to flash off.",
          "Follow the manufacturer's activation temperature and time: if the adhesive isn't fully activated, the bond is weak; if it gets too hot, the upper or the lining can be damaged.",
          { h3: "Cold adhesive" },
          "The reinforcement carries an adhesive that works without heat — useful when the upper or lining materials shouldn't be heated.",
          "K Pads reinforcements come treated with Kyotex adhesives, hot or cold, so they fit into a solvent-free process.",
        ],
      },
      {
        heading: "Step by step on the line",
        blocks: [
          "The exact order varies from plant to plant, but the process usually follows these steps:",
          {
            ordered: true,
            list: [
              "**Cut the reinforcement** to the shape of the style.",
              "**Skive the edges** so the outline doesn't show through the upper.",
              "**Activate the adhesive** with heat or cold, depending on the type.",
              "**Place it** between the upper and the lining, centered at the toe or the heel.",
              "**Last the shoe,** which gives the reinforcement its final shape.",
              "**Let it cool or rest** so it holds the shape it took on the last.",
            ],
          },
        ],
      },
      {
        heading: "What to check",
        blocks: [
          {
            list: [
              "**It shouldn't show.** If the edge of the reinforcement is visible from the outside, check the skiving and the placement.",
              "**It shouldn't come loose.** Incomplete activation or uneven pressure leaves areas unbonded.",
              "**It should hold its shape.** After wear, the toe and heel should spring back; if they cave in, the reinforcement may be too thin or not properly bonded.",
              "**It should be comfortable.** A reinforcement that's too stiff or poorly placed can hurt the foot.",
              "**It should match the last.** A reinforcement cut for one last can distort the shape of another.",
            ],
          },
          "As with any adhesive, the real test happens on your line: attach the reinforcements with your materials and your last, and check them with your usual quality tests.",
        ],
      },
      {
        heading: "When to revisit your reinforcements",
        blocks: [
          {
            list: [
              "When reinforcement edges start showing through the upper.",
              "When toes or heels lose their shape sooner than they should.",
              "When you still activate reinforcements with solvent and want those fumes off the floor.",
              "When you change the last, the pattern or the upper material.",
              "When you're looking for reinforcements made from natural and recycled materials.",
            ],
          },
          "In every case the test is the same: your materials, your last and your quality checks.",
        ],
      },
      {
        heading: "Toe puffs and counters at a glance",
        blocks: [
          {
            list: [
              "**Toe puff:** front of the shoe; shapes and holds the toe box.",
              "**Heel counter:** back of the shoe; holds the heel and keeps the foot stable.",
              "**Both:** sit between the upper and the lining, and are attached with heat, with a cold adhesive or, traditionally, with solvent.",
            ],
          },
        ],
      },
      {
        heading: "Reinforcements for leather goods",
        blocks: [
          "The same principles apply to handbags, wallets and other leather goods: reinforcements give a piece body and help it keep its shape over time. K Pads also develops reinforcement supports for the leather goods market. See [leather goods adhesives](/en/applications/leather-goods).",
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          "If you're reviewing how you attach reinforcements or want to move away from solvent activation, look at [K Pads](/en/systems/k-pads), read [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory) or [request a quote](/en/contact#quote) — a Kyotex specialist will help you choose the right reinforcement for your style.",
        ],
      },
    ],
  },

  hotmeltTypes: {
    title: "Hot Melt Adhesive Types for Footwear: TPU, PES, EVA, PBS",
    description:
      "How TPU, PES, EVA and PBS hot melt adhesives for footwear differ, the formats they come in and how to choose the right one for your materials and process.",
    h1: "Types of hot melt adhesive for footwear: TPU, PES, EVA and PBS",
    lead: "Every hot melt adhesive works the same way: it melts with heat, is pressed and bonds as it cools. What changes is the polymer it's made from — and that affects how flexible the bond is, the temperature it activates at and which materials it suits best. Kyotex offers four polymers in powder form: TPU, PES, PBS and EVA.",
    cardText:
      "How each polymer differs, the formats they come in and how to choose based on your materials.",
    sections: [
      {
        heading: "What they have in common",
        blocks: [
          "A hot melt is a solvent-free thermoplastic polymer. Kyotex sums up how it works in three steps: **melt, press, cool**. With no solvent, there's nothing to flash off; and because it's thermoplastic, the adhesive can be softened again with heat.",
          "That last trait cuts both ways: it lets you reactivate a bond, but it also means the finished bond shouldn't be exposed to temperatures close to its activation temperature. That's why the polymer should be chosen with the shoe's end use in mind.",
          "Everything you apply is adhesive, too — no part of it evaporates — so there are no solvent fumes at the station. What you do need to watch is running it at the temperature the manufacturer specifies.",
        ],
      },
      {
        heading: "TPU: thermoplastic polyurethane",
        blocks: [
          "TPU is a thermoplastic polyurethane. It's generally chosen when the bond needs to stay flexible and move with the material, which is common in footwear and textiles. In footwear manufacturing, TPU is among the most widely used bases for hot melt films.",
          "That flexibility also makes it worth considering where the bond has to survive repeated flexing. Kyotex includes TPU in its [K Thermo](/en/systems/k-thermo) hot melt powder range.",
        ],
      },
      {
        heading: "PES: copolyester",
        blocks: [
          "PES is a thermoplastic copolyester — a versatile base widely used to bond and laminate textiles and other materials.",
          "In footwear, it's an option to consider for laminating linings and textiles. Kyotex also offers it as a powder within K Thermo.",
        ],
      },
      {
        heading: "EVA: ethylene-vinyl acetate",
        blocks: [
          "EVA is one of the most common bases for hot melt adhesives. It generally activates at lower temperatures than other bases, which helps with sensitive materials; the trade-off is that its finished bond usually tolerates less heat. That makes it a common starting point when materials are heat-sensitive.",
          "According to Kyotex, EVA powder is used in large volumes in leather, footwear, filtration, luggage and carpet manufacturing.",
        ],
      },
      {
        heading: "PBS: polybutylene succinate",
        blocks: [
          "PBS is a polyester that Kyotex offers as the biodegradable option in its powder range. It's an alternative for brands looking to reduce the environmental footprint of their materials, as long as it meets what the part requires. As with any adhesive, confirm with your supplier how it performs in your process and how it should be stored.",
        ],
      },
      {
        heading: "The four polymers at a glance",
        blocks: [
          {
            list: [
              "**TPU:** flexible bonds that move with the material.",
              "**PES:** a versatile base, widely used to bond and laminate textiles.",
              "**EVA:** activates at lower temperatures; the finished bond tolerates less heat.",
              "**PBS:** the biodegradable option in the Kyotex powder range.",
            ],
          },
        ],
      },
      {
        heading: "How to choose between them",
        blocks: [
          "No polymer is better than the others across the board; one is simply a better fit for each job. Before requesting samples, look at:",
          {
            list: [
              "**The materials you're bonding** and the temperature they can take.",
              "**How flexible the bond needs to be:** an insole and a reinforcement have different needs.",
              "**The shoe's end use:** whether it will see heat, moisture or washing.",
              "**Your equipment:** the press or laminator has to reach the temperature and pressure the adhesive calls for.",
              "**Your sustainability goals:** if you're after a biodegradable option, consider PBS.",
              "**Your volume:** the format and the equipment should match how many pairs you run per shift.",
            ],
          },
          "With those answers, your supplier can recommend a polymer and a format. Then confirm it with a trial on your line and your usual quality tests.",
        ],
      },
      {
        heading: "Formats: powder, film, web, net and granules",
        blocks: [
          "The polymer is only half the decision; the other half is the form the adhesive comes in. K Thermo is available in five formats:",
          {
            list: [
              "**Powder:** scattered over the material and activated in the press. According to Kyotex, insole bonding is where it performs at its best.",
              "**Film:** a continuous layer of adhesive.",
              "**Web:** a fine mesh of adhesive fibers.",
              "**Net:** an open adhesive mesh.",
              "**Granules:** melted in equipment before application.",
            ],
          },
          "Film, web and net are common in [lamination](/en/applications/lamination); powder in [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding).",
        ],
      },
      {
        heading: "Where they're used in footwear",
        blocks: [
          {
            list: [
              "**Insole bonding:** powder or film to bond the insole.",
              "**Lamination:** joining linings, textiles and synthetics before cutting.",
              "**Reinforcements:** [K Pads](/en/systems/k-pads) reinforcements come treated with Kyotex hot melt or cold adhesives.",
              "**Leather goods:** Kyotex lists bonding PVC to leather among the uses of its powder range.",
            ],
          },
          "Kyotex also publishes uses outside footwear, such as lingerie and stretch fabrics, automotive and carpet.",
        ],
      },
      {
        heading: "Common mistakes when choosing a hot melt",
        blocks: [
          {
            list: [
              "**Choosing out of habit.** The polymer that worked on one style won't always work on another with different materials.",
              "**Thinking only about the press.** The bond also has to survive the shoe's life: flexing, heat, moisture or washing.",
              "**Not adjusting the process.** Each polymer needs its own mix of temperature, pressure and time; using another adhesive's settings gives weak bonds.",
              "**Testing only straight out of the press.** Also evaluate after the part cools and rests.",
              "**Checking only one side.** The adhesive has to work with both materials it joins.",
            ],
          },
        ],
      },
      {
        heading: "How to run the trial",
        blocks: [
          {
            ordered: true,
            list: [
              "Use the same materials and the same style you produce today.",
              "Set temperature, pressure and time to the adhesive manufacturer's instructions.",
              "Evaluate the bond after cooling and after your normal dwell time.",
              "If the part flexes in use, flex it before you sign off on the result.",
              "Compare against your current method and log the results for each material combination.",
            ],
          },
        ],
      },
      {
        heading: "What if the material can't take heat?",
        blocks: [
          "Then a hot melt isn't the best choice. Look at [K System](/en/systems/k-system) pressure-sensitive tape or [K Next](/en/systems/k-next) cold bonding, and read [how to choose a shoe adhesive by material](/en/guides/how-to-choose-a-shoe-adhesive-by-material).",
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          "To compare hot melt with conventional cement, read [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive). If you already know what you need, [request a quote](/en/contact#quote) and a Kyotex specialist will recommend the polymer and format for your process.",
        ],
      },
    ],
  },

  materials: {
    title: "How to Choose a Shoe Adhesive by Material | Kyotex",
    description:
      "Choosing an adhesive for leather, synthetics, textiles, foams, insole boards and reinforcements: what to check and which solvent-free option to test.",
    h1: "How to choose a footwear adhesive by material",
    lead: "An adhesive that performs well on leather can fail on a foam or a synthetic. So before choosing between pressure-sensitive tape, hot melt or cold bonding, you need to understand the materials you're joining. This guide walks through the most common materials in footwear, what to check in each and which solvent-free technology is worth testing.",
    cardText:
      "What to check in leather, synthetics, textiles, foams, insole boards and reinforcements before choosing an adhesive.",
    sections: [
      {
        heading: "Why the material matters so much",
        blocks: [
          "Bonds form at the surface. For an adhesive to work, it has to make close contact with both materials it joins. A porous surface soaks up some of the adhesive; a very smooth or finished surface gives it less to grip; and dust, oil or residue from other products means the adhesive bonds to that layer instead of the material.",
          "That's why there's no universal footwear adhesive — only adhesive-and-material combinations that work, and others to avoid.",
        ],
      },
      {
        heading: "Four questions for any material",
        blocks: [
          {
            ordered: true,
            list: [
              "**Is it porous or closed?** Leather, textiles and boards absorb some adhesive; plastics and smooth finishes don't.",
              "**Can it take heat?** If it warps, shrinks or marks at temperature, rule out hot melt for that bond.",
              "**How flexible does the bond need to be?** Areas that flex when walking need a bond that moves with them.",
              "**Are there finishes, oils or additives on the surface?** Anything between the adhesive and the material reduces adhesion.",
            ],
          },
          "Those answers already rule some options out. Whatever is left gets confirmed with a trial on your line.",
          "Before you start, ask your material suppliers for their technical data — heat tolerance, finishes and any adhesive recommendations. Having that on hand speeds up the trials.",
        ],
      },
      {
        heading: "Leather",
        blocks: [
          "Leather is porous and often carries surface finishes that can get in the way of adhesion, so some processes prep the bonding area first. Leathers with very closed finishes or heavy fatliquoring behave differently from more natural ones — if you switch leather suppliers, run the trial again.",
          "For leather, Kyotex works with [K System](/en/systems/k-system) pressure-sensitive tapes — in leather goods, with equipment such as the KYO500 for medium and large parts — and with [K Thermo](/en/systems/k-thermo) hot melts. Kyotex lists bonding PVC to leather among the uses of its powders, and EVA powder is used in large volumes in leather and footwear.",
        ],
      },
      {
        heading: "Synthetics: PU and PVC",
        blocks: [
          "Synthetics have more closed surfaces than leather, and their heat tolerance varies widely from one to the next. In some flexible PVCs, plasticizers can migrate to the surface over time and weaken the bond, so test the adhesive and check the bond again after a rest period.",
          "If the synthetic can handle the activation temperature, a hot melt is an option. If not, look at pressure-sensitive tape or [K Next](/en/systems/k-next), which delivers hot melt strength without heat.",
        ],
      },
      {
        heading: "Textiles and linings",
        blocks: [
          "Textiles are porous and flexible, and they're often laminated before cutting. That's done with hot melt film, web, net or powder spread across the fabric and activated with heat and pressure. Learn more on our [lamination](/en/applications/lamination) page.",
          "If the fabric stretches, the bond has to stretch with it. Kyotex lists lingerie and stretch fabrics among the uses of its powder range; to compare polymers, read [types of hot melt adhesive for footwear](/en/guides/types-of-hot-melt-adhesive-for-footwear).",
        ],
      },
      {
        heading: "Foams",
        blocks: [
          "Insole and padding foams can flatten, shrink or deform with heat. If a foam can't take a hot melt's activation temperature, go with cold bonding: K System pressure-sensitive tape or, when you need structural strength, K Next. Open-cell foams can also soak up some adhesive, so check coverage.",
          "Read [cold insole bonding: what it is and when to use it](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it) to see how a heat-free station works.",
        ],
      },
      {
        heading: "Insole boards and fiber materials",
        blocks: [
          "Insole boards and fiber materials are porous and firm. To bond them without solvents, plants use pressure-sensitive tape and powder hot melt, which according to Kyotex performs at its best in insole bonding. Read [what insole bonding is and how it's done](/en/guides/insole-bonding-in-shoe-manufacturing).",
        ],
      },
      {
        heading: "Reinforcements",
        blocks: [
          "[K Pads](/en/systems/k-pads) toe puffs, counters and microfibers come treated with Kyotex adhesives, hot or cold, so they fit into a solvent-free process. Read [toe puffs and heel counters](/en/guides/toe-puffs-and-heel-counters-for-footwear).",
        ],
      },
      {
        heading: "Common pairings in footwear",
        blocks: [
          "In practice you're rarely bonding a single material — you're bonding two different ones. A few common pairings and what to check:",
          {
            list: [
              "**Sock liner onto insole board:** the liner's foam or textile sets the rules; if it can't take heat, choose cold bonding.",
              "**Textile lining onto leather or synthetic:** hot melt lamination is common; make sure the bond stays flexible.",
              "**Reinforcement between upper and lining:** make sure activation doesn't damage the upper or the lining.",
              "**Leather goods parts:** pressure-sensitive tape avoids liquid cement, and the KYO500 handles medium and large parts.",
            ],
          },
        ],
      },
      {
        heading: "Quick reference",
        blocks: [
          {
            list: [
              "**Leather:** PSA tape or hot melt; check the finish.",
              "**Synthetics:** hot melt if they take heat; otherwise PSA tape or K Next. Test after a rest period too.",
              "**Textiles and linings:** hot melt film, web, net or powder.",
              "**Foams:** cold bonding if they can't take heat.",
              "**Insole boards and fibers:** PSA tape or powder hot melt.",
              "**Reinforcements:** K Pads, pre-treated with adhesive.",
            ],
          },
          "When you're joining two different materials, the adhesive has to work with both — the more delicate one decides.",
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            list: [
              "**Testing on one material and producing on another.** A new supplier or finish can change the result.",
              "**Ignoring moisture.** A damp material, or one stored somewhere humid, won't behave like a dry one.",
              "**Checking only right away.** Some bonds change as they rest; evaluate again later.",
              "**Choosing the adhesive before the process.** First decide whether your line can use heat, then pick the technology.",
              "**Leaving the line out.** Operators are the first to notice when a material change makes a station harder.",
            ],
          },
        ],
      },
      {
        heading: "Confirming the choice",
        blocks: [
          {
            ordered: true,
            list: [
              "Test with the same materials and the same style you produce.",
              "Use your quality team's adhesion tests.",
              "Evaluate after the rest period too and, where it applies, after flexing the part.",
              "Log the results for each material combination so you don't repeat trials.",
            ],
          },
          "Once you've identified your materials, [request a quote](/en/contact#quote) and a Kyotex specialist will help you choose the system. You can also browse all [Kyotex systems](/en/systems).",
        ],
      },
    ],
  },
};

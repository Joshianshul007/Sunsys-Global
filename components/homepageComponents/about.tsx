"use client";
import Reveal from "../animate";

export default function About() {
  return (
    <section className="w-full py-16">
      <Reveal from="left">
       <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About Sunsys Global</h2>
            <p className="text-white/70 leading-relaxed max-w-xl">
              Sunsys Global is the international Talent & Workforce Solutions Division of Sunsys Techsol Pvt. Ltd.
              We help global companies scale engineering capacity with elite developers, skilled professionals,
              and fresh talent — at up to 40% lower cost.
              <br /><br />
              We also open global career pathways for Indian engineers through remote roles,
              international deployments, and startup opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "40% Cost Advantage",
              "72 Hours–7 Days Deployment",
              "500+ Professionals",
              "Global Talent Mobility",
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#111418] border border-blue-500/40 rounded-2xl p-6 text-center shadow-xl"
              >
                <p className="text-xl font-semibold text-white/90">{stat}</p>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

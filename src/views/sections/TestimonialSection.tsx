export default function TestimonialSection() {
  return (
    <section class="py-10 max-w-7xl mx-auto relative z-0">
      <span class="hash-span" id="">
        &nbsp;
      </span>
      <div class="mt-12 bg-black-100 rounded-[20px]">
        <div class="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]">
          <div style="opacity: 1; transform: none;">
            <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              What others say
            </p>
            <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Testimonials.
            </h2>
          </div>
        </div>
        <div class="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
          <div
            class="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            style="opacity: 1; transform: none;"
          >
            <p class="text-white font-black text-[48px]">"</p>
            <div class="mt-1">
              <p class="text-white tracking-wider text-[18px]">
                I thought it was impossible to make a website as beautiful as our product,
                but Rick proved me wrong.
              </p>
              <div class="mt-7 flex justify-between items-center gap-1">
                <div class="flex-1 flex flex-col">
                  <p class="text-white font-medium text-[16px]">
                    <span class="blue-text-gradient">@</span> Sara Lee
                  </p>
                  <p class="mt-1 text-secondary text-[12px]">CFO of Acme Co</p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  alt="feedback_by-Sara Lee"
                  class="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            class="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            style="opacity: 1; transform: none;"
          >
            <p class="text-white font-black text-[48px]">"</p>
            <div class="mt-1">
              <p class="text-white tracking-wider text-[18px]">
                I've never met a web developer who truly cares about their clients'
                success like Rick does.
              </p>
              <div class="mt-7 flex justify-between items-center gap-1">
                <div class="flex-1 flex flex-col">
                  <p class="text-white font-medium text-[16px]">
                    <span class="blue-text-gradient">@</span> Chris Brown
                  </p>
                  <p class="mt-1 text-secondary text-[12px]">COO of DEF Corp</p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  alt="feedback_by-Chris Brown"
                  class="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            class="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            style="opacity: 1; transform: none;"
          >
            <p class="text-white font-black text-[48px]">"</p>
            <div class="mt-1">
              <p class="text-white tracking-wider text-[18px]">
                After Rick optimized our website, our traffic increased by 50%. We can't
                thank them enough!
              </p>
              <div class="mt-7 flex justify-between items-center gap-1">
                <div class="flex-1 flex flex-col">
                  <p class="text-white font-medium text-[16px]">
                    <span class="blue-text-gradient">@</span> Lisa Wang
                  </p>
                  <p class="mt-1 text-secondary text-[12px]">CTO of 456 Enterprises</p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt="feedback_by-Lisa Wang"
                  class="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

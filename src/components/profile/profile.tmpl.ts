export default ` <div class="profile" data-id="{{_id}}">
 <a href="{{href}}" class="profile__link-back">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="url(#paint0_linear)"/>
            <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
            <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
            <defs>
            <linearGradient id="paint0_linear" x1="8.46512" y1="4.55814" x2="24.4186" y2="18.8837" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DA5AFA"/>
            <stop offset="0.436217" stop-color="#8865F3"/>
            <stop offset="1" stop-color="#3570EC"/>
            </linearGradient>
        </defs>
    </svg>

</a>
  <main class="profile__main">
    <v-profileBlock/>
    </main>
</div>`;

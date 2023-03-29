let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startFunction,
  });
});


function startFunction() {

	var htmlEl = document.querySelector('html');
	var importTarget = document.querySelector('body');
	var html = `
		<div id="emojiPopup" style="display:block;    user-select: none;">
			<style>
				#emojiPopup{width:435px;position:fixed;top:40px;right:40px;z-index:1000;box-shadow:6px 6px 20px 0px #d5d5d5;}
				.emoji-select-area{user-select: none;}
				.emoji-mart-dark,.emoji-mart-dark .emoji-mart-bar{border-color:#555453;}
				.emoji-mart-bar:first-child{border-bottom-width:1px;border-top-left-radius:5px;border-top-right-radius:5px;background-color:rgb(37,42,72);}
				.emoji-mart-bar{border:0 solid #d9d9d9;}
				.emoji-mart,.emoji-mart *{box-sizing:border-box;line-height:1.15;}
				.emoji-mart-dark .emoji-mart-anchor-selected,.emoji-mart-dark .emoji-mart-anchor:focus,.emoji-mart-dark .emoji-mart-anchor:hover{color:#bfbfbf;}
				.emoji-mart-anchors button.emoji-mart-anchor-selected {color: rgb(174, 101, 197);}
				.emoji-mart-anchors button{border:none;font-weight:normal;cursor:pointer;background:none;color:#858585;}
				.emoji-mart-anchors button div{pointer-events: none;}
				.emoji-mart-anchor-bar{background-color:#464646;bottom:-3px;height:3px;left:0;position:absolute;width:100%;}
				.emoji-mart-emoji{background:none;border:none;box-shadow:none;display:inline-block;font-size:0;margin:0;padding:0;position:relative;}
				.emoji-mart-anchors{display:flex;flex-direction:row;justify-content:space-between;line-height:0;padding:0 6px;position:relative;}
				.css-w9ai8t button{border:none;font-weight:normal;cursor:pointer;}
				.emoji-mart-anchors img,.emoji-mart-anchors svg{fill:currentColor;height:18px;width:18px;}
				.emoji-mart-anchor-selected .emoji-mart-anchor-bar{bottom:0;}
				.emoji-mart-category-label{position:sticky;top:0;z-index:2;}
				.css-ejm6bc .emoji-mart-dark .emoji-mart-category-label span{background-color:rgb(37,42,72);}
				.emoji-mart-dark .emoji-mart-category-label span{background-color:#222;color:#fff;display:block;}
				.emoji-mart-category-list{margin:0;padding:0;user-select: none;}
				.emoji-mart-category-list li{display:inline-block;list-style:none;margin:0;padding:0;}
				.emoji-mart .emoji-mart-emoji{padding:6px;}
				.emoji-mart-emoji-native{font-family:Segoe UI Emoji,Segoe UI Symbol,Segoe UI,Apple Color Emoji,Twemoji Mozilla,Noto Color Emoji,Android Emoji;}
				.emoji-mart-category .emoji-mart-emoji span{cursor:default;position:relative;text-align:center;z-index:1;cursor:pointer;}
				.emoji-mart-anchor{background:none;border:none;box-shadow:none;color:#858585;display:block;flex:1 1 auto;margin:0;overflow:hidden;padding:12px 4px;position:relative;text-align:center;transition:color .1s ease-out;}
				.emoji-mart-scroll{}
				::-webkit-scrollbar-thumb{padding:0}
			</style>
			<div class="emoji-select-area">
				<div class="emoji-mart-bar">
					<nav class="emoji-mart-anchors" aria-label="Emoji categories">
						<button aria-label="Smileys &amp; People" title="Smileys &amp; People" data-index="2" type="button" class="emoji-mart-anchor emoji-mart-anchor-selected" style="">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
									<path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Animals &amp; Nature" title="Animals &amp; Nature" data-index="3" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"></path>
									<path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Food &amp; Drink" title="Food &amp; Drink" data-index="4" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Activity" title="Activity" data-index="5" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Travel &amp; Places" title="Travel &amp; Places" data-index="6" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"></path>
									<path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Objects" title="Objects" data-index="7" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"></path>
									<path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
						<button aria-label="Symbols" title="Symbols" data-index="8" type="button" class="emoji-mart-anchor ">
							<div class="emoji-mart-anchor-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"></path>
								</svg>
							</div>
							<span class="emoji-mart-anchor-bar" style="background-color: rgb(174, 101, 197);"></span>
						</button>
					</nav>
				</div>
				<section class="emoji-mart emoji-mart-dark" aria-label="" style="background-color: rgb(37, 42, 72); height: calc(100vh - 150px); overflow: auto;">
					<div class="emoji-mart-scroll">
						<section class="emoji-mart-category" aria-label="Smileys &amp; People" style="display: inherit;">
							<div data-name="Smileys &amp; People" class="emoji-mart-category-label">
								<span aria-hidden="true">Smileys &amp; People</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="😀, grinning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😀</span>
									</button>
								</li>
								<li>
									<button aria-label="😃, smiley" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😃</span>
									</button>
								</li>
								<li>
									<button aria-label="😄, smile" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😄</span>
									</button>
								</li>
								<li>
									<button aria-label="😁, grin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😁</span>
									</button>
								</li>
								<li>
									<button aria-label="😆, laughing, satisfied" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😆</span>
									</button>
								</li>
								<li>
									<button aria-label="😅, sweat_smile" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😅</span>
									</button>
								</li>
								<li>
									<button aria-label="🤣, rolling_on_the_floor_laughing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤣</span>
									</button>
								</li>
								<li>
									<button aria-label="😂, joy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😂</span>
									</button>
								</li>
								<li>
									<button aria-label="🙂, slightly_smiling_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙂</span>
									</button>
								</li>
								<li>
									<button aria-label="🙃, upside_down_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙃</span>
									</button>
								</li>
								<li>
									<button aria-label="😉, wink" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😉</span>
									</button>
								</li>
								<li>
									<button aria-label="😊, blush" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😊</span>
									</button>
								</li>
								<li>
									<button aria-label="😇, innocent" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😇</span>
									</button>
								</li>
								<li>
									<button aria-label="🥰, smiling_face_with_3_hearts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥰</span>
									</button>
								</li>
								<li>
									<button aria-label="😍, heart_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😍</span>
									</button>
								</li>
								<li>
									<button aria-label="🤩, star-struck, grinning_face_with_star_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤩</span>
									</button>
								</li>
								<li>
									<button aria-label="😘, kissing_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😘</span>
									</button>
								</li>
								<li>
									<button aria-label="😗, kissing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😗</span>
									</button>
								</li>
								<li>
									<button aria-label="☺️, relaxed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☺️</span>
									</button>
								</li>
								<li>
									<button aria-label="😚, kissing_closed_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😚</span>
									</button>
								</li>
								<li>
									<button aria-label="😙, kissing_smiling_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😙</span>
									</button>
								</li>
								<li>
									<button aria-label="😋, yum" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😋</span>
									</button>
								</li>
								<li>
									<button aria-label="😛, stuck_out_tongue" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😛</span>
									</button>
								</li>
								<li>
									<button aria-label="😜, stuck_out_tongue_winking_eye" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😜</span>
									</button>
								</li>
								<li>
									<button aria-label="🤪, zany_face, grinning_face_with_one_large_and_one_small_eye" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤪</span>
									</button>
								</li>
								<li>
									<button aria-label="😝, stuck_out_tongue_closed_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😝</span>
									</button>
								</li>
								<li>
									<button aria-label="🤑, money_mouth_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤑</span>
									</button>
								</li>
								<li>
									<button aria-label="🤗, hugging_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤗</span>
									</button>
								</li>
								<li>
									<button aria-label="🤭, face_with_hand_over_mouth, smiling_face_with_smiling_eyes_and_hand_covering_mouth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤭</span>
									</button>
								</li>
								<li>
									<button aria-label="🤫, shushing_face, face_with_finger_covering_closed_lips" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤫</span>
									</button>
								</li>
								<li>
									<button aria-label="🤔, thinking_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤔</span>
									</button>
								</li>
								<li>
									<button aria-label="🤐, zipper_mouth_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤐</span>
									</button>
								</li>
								<li>
									<button aria-label="🤨, face_with_raised_eyebrow, face_with_one_eyebrow_raised" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤨</span>
									</button>
								</li>
								<li>
									<button aria-label="😐, neutral_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😐</span>
									</button>
								</li>
								<li>
									<button aria-label="😑, expressionless" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😑</span>
									</button>
								</li>
								<li>
									<button aria-label="😶, no_mouth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😶</span>
									</button>
								</li>
								<li>
									<button aria-label="😏, smirk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😏</span>
									</button>
								</li>
								<li>
									<button aria-label="😒, unamused" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😒</span>
									</button>
								</li>
								<li>
									<button aria-label="🙄, face_with_rolling_eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙄</span>
									</button>
								</li>
								<li>
									<button aria-label="😬, grimacing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😬</span>
									</button>
								</li>
								<li>
									<button aria-label="🤥, lying_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤥</span>
									</button>
								</li>
								<li>
									<button aria-label="😌, relieved" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😌</span>
									</button>
								</li>
								<li>
									<button aria-label="😔, pensive" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😔</span>
									</button>
								</li>
								<li>
									<button aria-label="😪, sleepy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😪</span>
									</button>
								</li>
								<li>
									<button aria-label="🤤, drooling_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤤</span>
									</button>
								</li>
								<li>
									<button aria-label="😴, sleeping" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😴</span>
									</button>
								</li>
								<li>
									<button aria-label="😷, mask" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😷</span>
									</button>
								</li>
								<li>
									<button aria-label="🤒, face_with_thermometer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤒</span>
									</button>
								</li>
								<li>
									<button aria-label="🤕, face_with_head_bandage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤕</span>
									</button>
								</li>
								<li>
									<button aria-label="🤢, nauseated_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤢</span>
									</button>
								</li>
								<li>
									<button aria-label="🤮, face_vomiting, face_with_open_mouth_vomiting" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤮</span>
									</button>
								</li>
								<li>
									<button aria-label="🤧, sneezing_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤧</span>
									</button>
								</li>
								<li>
									<button aria-label="🥵, hot_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥵</span>
									</button>
								</li>
								<li>
									<button aria-label="🥶, cold_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥶</span>
									</button>
								</li>
								<li>
									<button aria-label="🥴, woozy_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥴</span>
									</button>
								</li>
								<li>
									<button aria-label="😵, dizzy_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😵</span>
									</button>
								</li>
								<li>
									<button aria-label="🤯, exploding_head, shocked_face_with_exploding_head" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤯</span>
									</button>
								</li>
								<li>
									<button aria-label="🤠, face_with_cowboy_hat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤠</span>
									</button>
								</li>
								<li>
									<button aria-label="🥳, partying_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥳</span>
									</button>
								</li>
								<li>
									<button aria-label="😎, sunglasses" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😎</span>
									</button>
								</li>
								<li>
									<button aria-label="🤓, nerd_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤓</span>
									</button>
								</li>
								<li>
									<button aria-label="🧐, face_with_monocle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧐</span>
									</button>
								</li>
								<li>
									<button aria-label="😕, confused" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😕</span>
									</button>
								</li>
								<li>
									<button aria-label="😟, worried" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😟</span>
									</button>
								</li>
								<li>
									<button aria-label="🙁, slightly_frowning_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙁</span>
									</button>
								</li>
								<li>
									<button aria-label="☹️, white_frowning_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☹️</span>
									</button>
								</li>
								<li>
									<button aria-label="😮, open_mouth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😮</span>
									</button>
								</li>
								<li>
									<button aria-label="😯, hushed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😯</span>
									</button>
								</li>
								<li>
									<button aria-label="😲, astonished" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😲</span>
									</button>
								</li>
								<li>
									<button aria-label="😳, flushed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😳</span>
									</button>
								</li>
								<li>
									<button aria-label="🥺, pleading_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥺</span>
									</button>
								</li>
								<li>
									<button aria-label="😦, frowning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😦</span>
									</button>
								</li>
								<li>
									<button aria-label="😧, anguished" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😧</span>
									</button>
								</li>
								<li>
									<button aria-label="😨, fearful" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😨</span>
									</button>
								</li>
								<li>
									<button aria-label="😰, cold_sweat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😰</span>
									</button>
								</li>
								<li>
									<button aria-label="😥, disappointed_relieved" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😥</span>
									</button>
								</li>
								<li>
									<button aria-label="😢, cry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😢</span>
									</button>
								</li>
								<li>
									<button aria-label="😭, sob" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😭</span>
									</button>
								</li>
								<li>
									<button aria-label="😱, scream" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😱</span>
									</button>
								</li>
								<li>
									<button aria-label="😖, confounded" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😖</span>
									</button>
								</li>
								<li>
									<button aria-label="😣, persevere" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😣</span>
									</button>
								</li>
								<li>
									<button aria-label="😞, disappointed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😞</span>
									</button>
								</li>
								<li>
									<button aria-label="😓, sweat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😓</span>
									</button>
								</li>
								<li>
									<button aria-label="😩, weary" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😩</span>
									</button>
								</li>
								<li>
									<button aria-label="😫, tired_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😫</span>
									</button>
								</li>
								<li>
									<button aria-label="🥱, yawning_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥱</span>
									</button>
								</li>
								<li>
									<button aria-label="😤, triumph" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😤</span>
									</button>
								</li>
								<li>
									<button aria-label="😡, rage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😡</span>
									</button>
								</li>
								<li>
									<button aria-label="😠, angry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😠</span>
									</button>
								</li>
								<li>
									<button aria-label="🤬, face_with_symbols_on_mouth, serious_face_with_symbols_covering_mouth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤬</span>
									</button>
								</li>
								<li>
									<button aria-label="😈, smiling_imp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😈</span>
									</button>
								</li>
								<li>
									<button aria-label="👿, imp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👿</span>
									</button>
								</li>
								<li>
									<button aria-label="💀, skull" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💀</span>
									</button>
								</li>
								<li>
									<button aria-label="☠️, skull_and_crossbones" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☠️</span>
									</button>
								</li>
								<li>
									<button aria-label="💩, hankey, poop, shit" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💩</span>
									</button>
								</li>
								<li>
									<button aria-label="🤡, clown_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤡</span>
									</button>
								</li>
								<li>
									<button aria-label="👹, japanese_ogre" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👹</span>
									</button>
								</li>
								<li>
									<button aria-label="👺, japanese_goblin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👺</span>
									</button>
								</li>
								<li>
									<button aria-label="👻, ghost" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👻</span>
									</button>
								</li>
								<li>
									<button aria-label="👽, alien" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👽</span>
									</button>
								</li>
								<li>
									<button aria-label="👾, space_invader" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👾</span>
									</button>
								</li>
								<li>
									<button aria-label="🤖, robot_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤖</span>
									</button>
								</li>
								<li>
									<button aria-label="😺, smiley_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😺</span>
									</button>
								</li>
								<li>
									<button aria-label="😸, smile_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😸</span>
									</button>
								</li>
								<li>
									<button aria-label="😹, joy_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😹</span>
									</button>
								</li>
								<li>
									<button aria-label="😻, heart_eyes_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😻</span>
									</button>
								</li>
								<li>
									<button aria-label="😼, smirk_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😼</span>
									</button>
								</li>
								<li>
									<button aria-label="😽, kissing_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😽</span>
									</button>
								</li>
								<li>
									<button aria-label="🙀, scream_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙀</span>
									</button>
								</li>
								<li>
									<button aria-label="😿, crying_cat_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😿</span>
									</button>
								</li>
								<li>
									<button aria-label="😾, pouting_cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">😾</span>
									</button>
								</li>
								<li>
									<button aria-label="🙈, see_no_evil" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙈</span>
									</button>
								</li>
								<li>
									<button aria-label="🙉, hear_no_evil" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙉</span>
									</button>
								</li>
								<li>
									<button aria-label="🙊, speak_no_evil" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙊</span>
									</button>
								</li>
								<li>
									<button aria-label="👋, wave" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👋</span>
									</button>
								</li>
								<li>
									<button aria-label="🤚, raised_back_of_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤚</span>
									</button>
								</li>
								<li>
									<button aria-label="🖐️, raised_hand_with_fingers_splayed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖐️</span>
									</button>
								</li>
								<li>
									<button aria-label="✋, hand, raised_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✋</span>
									</button>
								</li>
								<li>
									<button aria-label="🖖, spock-hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖖</span>
									</button>
								</li>
								<li>
									<button aria-label="👌, ok_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👌</span>
									</button>
								</li>
								<li>
									<button aria-label="🤏, pinching_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤏</span>
									</button>
								</li>
								<li>
									<button aria-label="✌️, v" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✌️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤞, crossed_fingers, hand_with_index_and_middle_fingers_crossed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤞</span>
									</button>
								</li>
								<li>
									<button aria-label="🤟, i_love_you_hand_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤟</span>
									</button>
								</li>
								<li>
									<button aria-label="🤘, the_horns, sign_of_the_horns" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤘</span>
									</button>
								</li>
								<li>
									<button aria-label="🤙, call_me_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤙</span>
									</button>
								</li>
								<li>
									<button aria-label="👈, point_left" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👈</span>
									</button>
								</li>
								<li>
									<button aria-label="👉, point_right" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👉</span>
									</button>
								</li>
								<li>
									<button aria-label="👆, point_up_2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👆</span>
									</button>
								</li>
								<li>
									<button aria-label="🖕, middle_finger, reversed_hand_with_middle_finger_extended" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖕</span>
									</button>
								</li>
								<li>
									<button aria-label="👇, point_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👇</span>
									</button>
								</li>
								<li>
									<button aria-label="☝️, point_up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☝️</span>
									</button>
								</li>
								<li>
									<button aria-label="👍, +1, thumbsup" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👍</span>
									</button>
								</li>
								<li>
									<button aria-label="👎, -1, thumbsdown" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👎</span>
									</button>
								</li>
								<li>
									<button aria-label="✊, fist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✊</span>
									</button>
								</li>
								<li>
									<button aria-label="👊, facepunch, punch" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👊</span>
									</button>
								</li>
								<li>
									<button aria-label="🤛, left-facing_fist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤛</span>
									</button>
								</li>
								<li>
									<button aria-label="🤜, right-facing_fist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤜</span>
									</button>
								</li>
								<li>
									<button aria-label="👏, clap" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👏</span>
									</button>
								</li>
								<li>
									<button aria-label="🙌, raised_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙌</span>
									</button>
								</li>
								<li>
									<button aria-label="👐, open_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👐</span>
									</button>
								</li>
								<li>
									<button aria-label="🤲, palms_up_together" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤲</span>
									</button>
								</li>
								<li>
									<button aria-label="🤝, handshake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤝</span>
									</button>
								</li>
								<li>
									<button aria-label="🙏, pray" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙏</span>
									</button>
								</li>
								<li>
									<button aria-label="✍️, writing_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✍️</span>
									</button>
								</li>
								<li>
									<button aria-label="💅, nail_care" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💅</span>
									</button>
								</li>
								<li>
									<button aria-label="🤳, selfie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤳</span>
									</button>
								</li>
								<li>
									<button aria-label="💪, muscle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💪</span>
									</button>
								</li>
								<li>
									<button aria-label="🦾, mechanical_arm" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦾</span>
									</button>
								</li>
								<li>
									<button aria-label="🦿, mechanical_leg" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦿</span>
									</button>
								</li>
								<li>
									<button aria-label="🦵, leg" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦵</span>
									</button>
								</li>
								<li>
									<button aria-label="🦶, foot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦶</span>
									</button>
								</li>
								<li>
									<button aria-label="👂, ear" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👂</span>
									</button>
								</li>
								<li>
									<button aria-label="🦻, ear_with_hearing_aid" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦻</span>
									</button>
								</li>
								<li>
									<button aria-label="👃, nose" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👃</span>
									</button>
								</li>
								<li>
									<button aria-label="🧠, brain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧠</span>
									</button>
								</li>
								<li>
									<button aria-label="🦷, tooth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦷</span>
									</button>
								</li>
								<li>
									<button aria-label="🦴, bone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦴</span>
									</button>
								</li>
								<li>
									<button aria-label="👀, eyes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👀</span>
									</button>
								</li>
								<li>
									<button aria-label="👁️, eye" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👁️</span>
									</button>
								</li>
								<li>
									<button aria-label="👅, tongue" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👅</span>
									</button>
								</li>
								<li>
									<button aria-label="👄, lips" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👄</span>
									</button>
								</li>
								<li>
									<button aria-label="👶, baby" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👶</span>
									</button>
								</li>
								<li>
									<button aria-label="🧒, child" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧒</span>
									</button>
								</li>
								<li>
									<button aria-label="👦, boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👧, girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👧</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑, adult" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑</span>
									</button>
								</li>
								<li>
									<button aria-label="👱, person_with_blond_hair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👱</span>
									</button>
								</li>
								<li>
									<button aria-label="👨, man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨</span>
									</button>
								</li>
								<li>
									<button aria-label="🧔, bearded_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧔</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦰, red_haired_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦰</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦱, curly_haired_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦱</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦳, white_haired_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦳</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦲, bald_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦲</span>
									</button>
								</li>
								<li>
									<button aria-label="👩, woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦰, red_haired_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦰</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦰, red_haired_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦰</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦱, curly_haired_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦱</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦱, curly_haired_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦱</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦳, white_haired_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦳</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦳, white_haired_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦳</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦲, bald_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦲</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦲, bald_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦲</span>
									</button>
								</li>
								<li>
									<button aria-label="👱&zwj;♀️, blond-haired-woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👱&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="👱&zwj;♂️, blond-haired-man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👱&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧓, older_adult" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧓</span>
									</button>
								</li>
								<li>
									<button aria-label="👴, older_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👴</span>
									</button>
								</li>
								<li>
									<button aria-label="👵, older_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👵</span>
									</button>
								</li>
								<li>
									<button aria-label="🙍, person_frowning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙍</span>
									</button>
								</li>
								<li>
									<button aria-label="🙍&zwj;♂️, man-frowning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙍&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙍&zwj;♀️, woman-frowning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙍&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙎, person_with_pouting_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙎</span>
									</button>
								</li>
								<li>
									<button aria-label="🙎&zwj;♂️, man-pouting" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙎&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙎&zwj;♀️, woman-pouting" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙎&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙅, no_good" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙅</span>
									</button>
								</li>
								<li>
									<button aria-label="🙅&zwj;♂️, man-gesturing-no" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙅&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙅&zwj;♀️, woman-gesturing-no" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙅&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙆, ok_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙆</span>
									</button>
								</li>
								<li>
									<button aria-label="🙆&zwj;♂️, man-gesturing-ok" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙆&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙆&zwj;♀️, woman-gesturing-ok" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙆&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="💁, information_desk_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💁</span>
									</button>
								</li>
								<li>
									<button aria-label="💁&zwj;♂️, man-tipping-hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💁&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="💁&zwj;♀️, woman-tipping-hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💁&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙋, raising_hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙋</span>
									</button>
								</li>
								<li>
									<button aria-label="🙋&zwj;♂️, man-raising-hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙋&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙋&zwj;♀️, woman-raising-hand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙋&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧏, deaf_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧏</span>
									</button>
								</li>
								<li>
									<button aria-label="🧏&zwj;♂️, deaf_man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧏&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧏&zwj;♀️, deaf_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧏&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙇, bow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙇</span>
									</button>
								</li>
								<li>
									<button aria-label="🙇&zwj;♂️, man-bowing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙇&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🙇&zwj;♀️, woman-bowing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🙇&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤦, face_palm" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤦</span>
									</button>
								</li>
								<li>
									<button aria-label="🤦&zwj;♂️, man-facepalming" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤦&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤦&zwj;♀️, woman-facepalming" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤦&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤷, shrug" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤷</span>
									</button>
								</li>
								<li>
									<button aria-label="🤷&zwj;♂️, man-shrugging" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤷&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤷&zwj;♀️, woman-shrugging" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤷&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;⚕️, health_worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;⚕️</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;⚕️, male-doctor" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;⚕️</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;⚕️, female-doctor" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;⚕️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🎓, student" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🎓</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🎓, male-student" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🎓</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🎓, female-student" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🎓</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🏫, teacher" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🏫</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🏫, male-teacher" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🏫</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🏫, female-teacher" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🏫</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;⚖️, judge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;⚖️</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;⚖️, male-judge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;⚖️</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;⚖️, female-judge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;⚖️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🌾, farmer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🌾</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🌾, male-farmer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🌾</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🌾, female-farmer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🌾</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🍳, cook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🍳</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🍳, male-cook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🍳</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🍳, female-cook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🍳</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🔧, mechanic" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🔧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🔧, male-mechanic" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🔧</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🔧, female-mechanic" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🔧</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🏭, factory_worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🏭</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🏭, male-factory-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🏭</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🏭, female-factory-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🏭</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;💼, office_worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;💼</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;💼, male-office-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;💼</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;💼, female-office-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;💼</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🔬, scientist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🔬</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🔬, male-scientist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🔬</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🔬, female-scientist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🔬</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;💻, technologist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;💻</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;💻, male-technologist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;💻</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;💻, female-technologist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;💻</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🎤, singer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🎤</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🎤, male-singer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🎤</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🎤, female-singer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🎤</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🎨, artist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🎨</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🎨, male-artist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🎨</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🎨, female-artist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🎨</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;✈️, pilot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;✈️</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;✈️, male-pilot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;✈️</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;✈️, female-pilot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;✈️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🚀, astronaut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🚀</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🚀, male-astronaut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🚀</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🚀, female-astronaut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🚀</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🚒, firefighter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🚒</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🚒, male-firefighter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🚒</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🚒, female-firefighter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🚒</span>
									</button>
								</li>
								<li>
									<button aria-label="👮, cop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👮</span>
									</button>
								</li>
								<li>
									<button aria-label="👮&zwj;♂️, male-police-officer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👮&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="👮&zwj;♀️, female-police-officer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👮&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕵️, sleuth_or_spy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕵️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕵️&zwj;♂️, male-detective" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕵️&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕵️&zwj;♀️, female-detective" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕵️&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="💂, guardsman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💂</span>
									</button>
								</li>
								<li>
									<button aria-label="💂&zwj;♂️, male-guard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💂&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="💂&zwj;♀️, female-guard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💂&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="👷, construction_worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👷</span>
									</button>
								</li>
								<li>
									<button aria-label="👷&zwj;♂️, male-construction-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👷&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="👷&zwj;♀️, female-construction-worker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👷&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤴, prince" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤴</span>
									</button>
								</li>
								<li>
									<button aria-label="👸, princess" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👸</span>
									</button>
								</li>
								<li>
									<button aria-label="👳, man_with_turban" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👳</span>
									</button>
								</li>
								<li>
									<button aria-label="👳&zwj;♂️, man-wearing-turban" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👳&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="👳&zwj;♀️, woman-wearing-turban" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👳&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="👲, man_with_gua_pi_mao" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👲</span>
									</button>
								</li>
								<li>
									<button aria-label="🧕, person_with_headscarf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧕</span>
									</button>
								</li>
								<li>
									<button aria-label="🤵, man_in_tuxedo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤵</span>
									</button>
								</li>
								<li>
									<button aria-label="👰, bride_with_veil" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👰</span>
									</button>
								</li>
								<li>
									<button aria-label="🤰, pregnant_woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤰</span>
									</button>
								</li>
								<li>
									<button aria-label="🤱, breast-feeding" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤱</span>
									</button>
								</li>
								<li>
									<button aria-label="👼, angel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👼</span>
									</button>
								</li>
								<li>
									<button aria-label="🎅, santa" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎅</span>
									</button>
								</li>
								<li>
									<button aria-label="🤶, mrs_claus, mother_christmas" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤶</span>
									</button>
								</li>
								<li>
									<button aria-label="🦸, superhero" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦸</span>
									</button>
								</li>
								<li>
									<button aria-label="🦸&zwj;♂️, male_superhero" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦸&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦸&zwj;♀️, female_superhero" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦸&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦹, supervillain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦹</span>
									</button>
								</li>
								<li>
									<button aria-label="🦹&zwj;♂️, male_supervillain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦹&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦹&zwj;♀️, female_supervillain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦹&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧙, mage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧙</span>
									</button>
								</li>
								<li>
									<button aria-label="🧙&zwj;♂️, male_mage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧙&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧙&zwj;♀️, female_mage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧙&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧚, fairy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧚</span>
									</button>
								</li>
								<li>
									<button aria-label="🧚&zwj;♂️, male_fairy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧚&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧚&zwj;♀️, female_fairy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧚&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧛, vampire" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧛</span>
									</button>
								</li>
								<li>
									<button aria-label="🧛&zwj;♂️, male_vampire" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧛&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧛&zwj;♀️, female_vampire" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧛&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧜, merperson" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧜</span>
									</button>
								</li>
								<li>
									<button aria-label="🧜&zwj;♂️, merman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧜&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧜&zwj;♀️, mermaid" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧜&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧝, elf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧝</span>
									</button>
								</li>
								<li>
									<button aria-label="🧝&zwj;♂️, male_elf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧝&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧝&zwj;♀️, female_elf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧝&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧞, genie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧞</span>
									</button>
								</li>
								<li>
									<button aria-label="🧞&zwj;♂️, male_genie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧞&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧞&zwj;♀️, female_genie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧞&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧟, zombie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧟</span>
									</button>
								</li>
								<li>
									<button aria-label="🧟&zwj;♂️, male_zombie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧟&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧟&zwj;♀️, female_zombie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧟&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="💆, massage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💆</span>
									</button>
								</li>
								<li>
									<button aria-label="💆&zwj;♂️, man-getting-massage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💆&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="💆&zwj;♀️, woman-getting-massage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💆&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="💇, haircut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💇</span>
									</button>
								</li>
								<li>
									<button aria-label="💇&zwj;♂️, man-getting-haircut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💇&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="💇&zwj;♀️, woman-getting-haircut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💇&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚶, walking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚶</span>
									</button>
								</li>
								<li>
									<button aria-label="🚶&zwj;♂️, man-walking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚶&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚶&zwj;♀️, woman-walking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚶&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧍, standing_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧍</span>
									</button>
								</li>
								<li>
									<button aria-label="🧍&zwj;♂️, man_standing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧍&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧍&zwj;♀️, woman_standing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧍&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧎, kneeling_person" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧎</span>
									</button>
								</li>
								<li>
									<button aria-label="🧎&zwj;♂️, man_kneeling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧎&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧎&zwj;♀️, woman_kneeling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧎&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦯, person_with_probing_cane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦯</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦯, man_with_probing_cane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦯</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦯, woman_with_probing_cane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦯</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦼, person_in_motorized_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦼</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦼, man_in_motorized_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦼</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦼, woman_in_motorized_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦼</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🦽, person_in_manual_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🦽</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;🦽, man_in_manual_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;🦽</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;🦽, woman_in_manual_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;🦽</span>
									</button>
								</li>
								<li>
									<button aria-label="🏃, runner, running" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏃</span>
									</button>
								</li>
								<li>
									<button aria-label="🏃&zwj;♂️, man-running" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏃&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏃&zwj;♀️, woman-running" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏃&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="💃, dancer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💃</span>
									</button>
								</li>
								<li>
									<button aria-label="🕺, man_dancing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕺</span>
									</button>
								</li>
								<li>
									<button aria-label="🕴️, man_in_business_suit_levitating" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕴️</span>
									</button>
								</li>
								<li>
									<button aria-label="👯, dancers" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👯</span>
									</button>
								</li>
								<li>
									<button aria-label="👯&zwj;♂️, man-with-bunny-ears-partying" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👯&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="👯&zwj;♀️, woman-with-bunny-ears-partying" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👯&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧖, person_in_steamy_room" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧖</span>
									</button>
								</li>
								<li>
									<button aria-label="🧖&zwj;♂️, man_in_steamy_room" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧖&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧖&zwj;♀️, woman_in_steamy_room" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧖&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧗, person_climbing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧗</span>
									</button>
								</li>
								<li>
									<button aria-label="🧗&zwj;♂️, man_climbing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧗&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧗&zwj;♀️, woman_climbing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧗&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤺, fencer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤺</span>
									</button>
								</li>
								<li>
									<button aria-label="🏇, horse_racing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏇</span>
									</button>
								</li>
								<li>
									<button aria-label="⛷️, skier" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛷️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏂, snowboarder" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏂</span>
									</button>
								</li>
								<li>
									<button aria-label="🏌️, golfer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏌️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏌️&zwj;♂️, man-golfing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏌️&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏌️&zwj;♀️, woman-golfing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏌️&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏄, surfer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏄</span>
									</button>
								</li>
								<li>
									<button aria-label="🏄&zwj;♂️, man-surfing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏄&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏄&zwj;♀️, woman-surfing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏄&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚣, rowboat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚣</span>
									</button>
								</li>
								<li>
									<button aria-label="🚣&zwj;♂️, man-rowing-boat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚣&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚣&zwj;♀️, woman-rowing-boat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚣&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏊, swimmer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏊</span>
									</button>
								</li>
								<li>
									<button aria-label="🏊&zwj;♂️, man-swimming" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏊&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏊&zwj;♀️, woman-swimming" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏊&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛹️, person_with_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛹️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛹️&zwj;♂️, man-bouncing-ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛹️&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛹️&zwj;♀️, woman-bouncing-ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛹️&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏋️, weight_lifter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏋️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏋️&zwj;♂️, man-lifting-weights" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏋️&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏋️&zwj;♀️, woman-lifting-weights" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏋️&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚴, bicyclist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚴</span>
									</button>
								</li>
								<li>
									<button aria-label="🚴&zwj;♂️, man-biking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚴&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚴&zwj;♀️, woman-biking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚴&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚵, mountain_bicyclist" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚵</span>
									</button>
								</li>
								<li>
									<button aria-label="🚵&zwj;♂️, man-mountain-biking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚵&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚵&zwj;♀️, woman-mountain-biking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚵&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤸, person_doing_cartwheel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤸</span>
									</button>
								</li>
								<li>
									<button aria-label="🤸&zwj;♂️, man-cartwheeling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤸&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤸&zwj;♀️, woman-cartwheeling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤸&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤼, wrestlers" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤼</span>
									</button>
								</li>
								<li>
									<button aria-label="🤼&zwj;♂️, man-wrestling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤼&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤼&zwj;♀️, woman-wrestling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤼&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤽, water_polo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤽</span>
									</button>
								</li>
								<li>
									<button aria-label="🤽&zwj;♂️, man-playing-water-polo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤽&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤽&zwj;♀️, woman-playing-water-polo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤽&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤾, handball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤾</span>
									</button>
								</li>
								<li>
									<button aria-label="🤾&zwj;♂️, man-playing-handball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤾&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤾&zwj;♀️, woman-playing-handball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤾&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤹, juggling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤹</span>
									</button>
								</li>
								<li>
									<button aria-label="🤹&zwj;♂️, man-juggling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤹&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🤹&zwj;♀️, woman-juggling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤹&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧘, person_in_lotus_position" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧘</span>
									</button>
								</li>
								<li>
									<button aria-label="🧘&zwj;♂️, man_in_lotus_position" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧘&zwj;♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧘&zwj;♀️, woman_in_lotus_position" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧘&zwj;♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛀, bath" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛀</span>
									</button>
								</li>
								<li>
									<button aria-label="🛌, sleeping_accommodation" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛌</span>
									</button>
								</li>
								<li>
									<button aria-label="🧑&zwj;🤝&zwj;🧑, people_holding_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧑&zwj;🤝&zwj;🧑</span>
									</button>
								</li>
								<li>
									<button aria-label="👭, two_women_holding_hands, women_holding_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👭</span>
									</button>
								</li>
								<li>
									<button aria-label="👫, couple, man_and_woman_holding_hands, woman_and_man_holding_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👫</span>
									</button>
								</li>
								<li>
									<button aria-label="👬, two_men_holding_hands, men_holding_hands" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👬</span>
									</button>
								</li>
								<li>
									<button aria-label="💏, couplekiss" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💏</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;❤️&zwj;💋&zwj;👨, woman-kiss-man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;❤️&zwj;💋&zwj;👨</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;❤️&zwj;💋&zwj;👨, man-kiss-man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;❤️&zwj;💋&zwj;👨</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;❤️&zwj;💋&zwj;👩, woman-kiss-woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;❤️&zwj;💋&zwj;👩</span>
									</button>
								</li>
								<li>
									<button aria-label="💑, couple_with_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💑</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;❤️&zwj;👨, woman-heart-man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;❤️&zwj;👨</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;❤️&zwj;👨, man-heart-man" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;❤️&zwj;👨</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;❤️&zwj;👩, woman-heart-woman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;❤️&zwj;👩</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👩&zwj;👦, man-woman-boy, family" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👩&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👪, family, man-woman-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👪</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👩&zwj;👧, man-woman-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👩&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👩&zwj;👧&zwj;👦, man-woman-girl-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👩&zwj;👧&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👩&zwj;👦&zwj;👦, man-woman-boy-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👩&zwj;👦&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👩&zwj;👧&zwj;👧, man-woman-girl-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👩&zwj;👧&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👨&zwj;👦, man-man-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👨&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👨&zwj;👧, man-man-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👨&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👨&zwj;👧&zwj;👦, man-man-girl-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👨&zwj;👧&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👨&zwj;👦&zwj;👦, man-man-boy-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👨&zwj;👦&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👨&zwj;👧&zwj;👧, man-man-girl-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👨&zwj;👧&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👩&zwj;👦, woman-woman-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👩&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👩&zwj;👧, woman-woman-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👩&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👩&zwj;👧&zwj;👦, woman-woman-girl-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👩&zwj;👧&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👩&zwj;👦&zwj;👦, woman-woman-boy-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👩&zwj;👦&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👩&zwj;👧&zwj;👧, woman-woman-girl-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👩&zwj;👧&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👦, man-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👦&zwj;👦, man-boy-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👦&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👧, man-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👧&zwj;👦, man-girl-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👧&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👨&zwj;👧&zwj;👧, man-girl-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👨&zwj;👧&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👦, woman-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👦&zwj;👦, woman-boy-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👦&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👧, woman-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👧&zwj;👦, woman-girl-boy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👧&zwj;👦</span>
									</button>
								</li>
								<li>
									<button aria-label="👩&zwj;👧&zwj;👧, woman-girl-girl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👩&zwj;👧&zwj;👧</span>
									</button>
								</li>
								<li>
									<button aria-label="🗣️, speaking_head_in_silhouette" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗣️</span>
									</button>
								</li>
								<li>
									<button aria-label="👤, bust_in_silhouette" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👤</span>
									</button>
								</li>
								<li>
									<button aria-label="👥, busts_in_silhouette" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👥</span>
									</button>
								</li>
								<li>
									<button aria-label="👣, footprints" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👣</span>
									</button>
								</li>
								<li>
									<button aria-label="💋, kiss" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💋</span>
									</button>
								</li>
								<li>
									<button aria-label="💌, love_letter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💌</span>
									</button>
								</li>
								<li>
									<button aria-label="💘, cupid" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💘</span>
									</button>
								</li>
								<li>
									<button aria-label="💝, gift_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💝</span>
									</button>
								</li>
								<li>
									<button aria-label="💖, sparkling_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💖</span>
									</button>
								</li>
								<li>
									<button aria-label="💗, heartpulse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💗</span>
									</button>
								</li>
								<li>
									<button aria-label="💓, heartbeat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💓</span>
									</button>
								</li>
								<li>
									<button aria-label="💞, revolving_hearts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💞</span>
									</button>
								</li>
								<li>
									<button aria-label="💕, two_hearts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💕</span>
									</button>
								</li>
								<li>
									<button aria-label="💟, heart_decoration" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💟</span>
									</button>
								</li>
								<li>
									<button aria-label="❣️, heavy_heart_exclamation_mark_ornament" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❣️</span>
									</button>
								</li>
								<li>
									<button aria-label="💔, broken_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💔</span>
									</button>
								</li>
								<li>
									<button aria-label="❤️, heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❤️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧡, orange_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧡</span>
									</button>
								</li>
								<li>
									<button aria-label="💛, yellow_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💛</span>
									</button>
								</li>
								<li>
									<button aria-label="💚, green_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💚</span>
									</button>
								</li>
								<li>
									<button aria-label="💙, blue_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💙</span>
									</button>
								</li>
								<li>
									<button aria-label="💜, purple_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💜</span>
									</button>
								</li>
								<li>
									<button aria-label="🤎, brown_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤎</span>
									</button>
								</li>
								<li>
									<button aria-label="🖤, black_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖤</span>
									</button>
								</li>
								<li>
									<button aria-label="🤍, white_heart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤍</span>
									</button>
								</li>
								<li>
									<button aria-label="💯, 100" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💯</span>
									</button>
								</li>
								<li>
									<button aria-label="💢, anger" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💢</span>
									</button>
								</li>
								<li>
									<button aria-label="💥, boom, collision" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💥</span>
									</button>
								</li>
								<li>
									<button aria-label="💫, dizzy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💫</span>
									</button>
								</li>
								<li>
									<button aria-label="💦, sweat_drops" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💦</span>
									</button>
								</li>
								<li>
									<button aria-label="💨, dash" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💨</span>
									</button>
								</li>
								<li>
									<button aria-label="🕳️, hole" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕳️</span>
									</button>
								</li>
								<li>
									<button aria-label="💣, bomb" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💣</span>
									</button>
								</li>
								<li>
									<button aria-label="💬, speech_balloon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💬</span>
									</button>
								</li>
								<li>
									<button aria-label="👁️&zwj;🗨️, eye-in-speech-bubble" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👁️&zwj;🗨️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗨️, left_speech_bubble" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗨️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗯️, right_anger_bubble" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗯️</span>
									</button>
								</li>
								<li>
									<button aria-label="💭, thought_balloon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💭</span>
									</button>
								</li>
								<li>
									<button aria-label="💤, zzz" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💤</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Animals &amp; Nature" style="display: inherit;">
							<div data-name="Animals &amp; Nature" class="emoji-mart-category-label">
								<span aria-hidden="true">Animals &amp; Nature</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="🐵, monkey_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐵</span>
									</button>
								</li>
								<li>
									<button aria-label="🐒, monkey" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐒</span>
									</button>
								</li>
								<li>
									<button aria-label="🦍, gorilla" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦍</span>
									</button>
								</li>
								<li>
									<button aria-label="🦧, orangutan" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦧</span>
									</button>
								</li>
								<li>
									<button aria-label="🐶, dog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐶</span>
									</button>
								</li>
								<li>
									<button aria-label="🐕, dog2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐕</span>
									</button>
								</li>
								<li>
									<button aria-label="🦮, guide_dog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦮</span>
									</button>
								</li>
								<li>
									<button aria-label="🐕&zwj;🦺, service_dog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐕&zwj;🦺</span>
									</button>
								</li>
								<li>
									<button aria-label="🐩, poodle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐩</span>
									</button>
								</li>
								<li>
									<button aria-label="🐺, wolf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐺</span>
									</button>
								</li>
								<li>
									<button aria-label="🦊, fox_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦊</span>
									</button>
								</li>
								<li>
									<button aria-label="🦝, raccoon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦝</span>
									</button>
								</li>
								<li>
									<button aria-label="🐱, cat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐱</span>
									</button>
								</li>
								<li>
									<button aria-label="🐈, cat2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐈</span>
									</button>
								</li>
								<li>
									<button aria-label="🦁, lion_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦁</span>
									</button>
								</li>
								<li>
									<button aria-label="🐯, tiger" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐯</span>
									</button>
								</li>
								<li>
									<button aria-label="🐅, tiger2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐅</span>
									</button>
								</li>
								<li>
									<button aria-label="🐆, leopard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐆</span>
									</button>
								</li>
								<li>
									<button aria-label="🐴, horse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐴</span>
									</button>
								</li>
								<li>
									<button aria-label="🐎, racehorse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐎</span>
									</button>
								</li>
								<li>
									<button aria-label="🦄, unicorn_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦄</span>
									</button>
								</li>
								<li>
									<button aria-label="🦓, zebra_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦓</span>
									</button>
								</li>
								<li>
									<button aria-label="🦌, deer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦌</span>
									</button>
								</li>
								<li>
									<button aria-label="🐮, cow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐮</span>
									</button>
								</li>
								<li>
									<button aria-label="🐂, ox" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐂</span>
									</button>
								</li>
								<li>
									<button aria-label="🐃, water_buffalo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐃</span>
									</button>
								</li>
								<li>
									<button aria-label="🐄, cow2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐄</span>
									</button>
								</li>
								<li>
									<button aria-label="🐷, pig" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐷</span>
									</button>
								</li>
								<li>
									<button aria-label="🐖, pig2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐖</span>
									</button>
								</li>
								<li>
									<button aria-label="🐗, boar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐗</span>
									</button>
								</li>
								<li>
									<button aria-label="🐽, pig_nose" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐽</span>
									</button>
								</li>
								<li>
									<button aria-label="🐏, ram" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐏</span>
									</button>
								</li>
								<li>
									<button aria-label="🐑, sheep" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐑</span>
									</button>
								</li>
								<li>
									<button aria-label="🐐, goat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐐</span>
									</button>
								</li>
								<li>
									<button aria-label="🐪, dromedary_camel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐪</span>
									</button>
								</li>
								<li>
									<button aria-label="🐫, camel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐫</span>
									</button>
								</li>
								<li>
									<button aria-label="🦙, llama" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦙</span>
									</button>
								</li>
								<li>
									<button aria-label="🦒, giraffe_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦒</span>
									</button>
								</li>
								<li>
									<button aria-label="🐘, elephant" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐘</span>
									</button>
								</li>
								<li>
									<button aria-label="🦏, rhinoceros" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦏</span>
									</button>
								</li>
								<li>
									<button aria-label="🦛, hippopotamus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦛</span>
									</button>
								</li>
								<li>
									<button aria-label="🐭, mouse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐭</span>
									</button>
								</li>
								<li>
									<button aria-label="🐁, mouse2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐁</span>
									</button>
								</li>
								<li>
									<button aria-label="🐀, rat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐀</span>
									</button>
								</li>
								<li>
									<button aria-label="🐹, hamster" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐹</span>
									</button>
								</li>
								<li>
									<button aria-label="🐰, rabbit" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐰</span>
									</button>
								</li>
								<li>
									<button aria-label="🐇, rabbit2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐇</span>
									</button>
								</li>
								<li>
									<button aria-label="🐿️, chipmunk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐿️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦔, hedgehog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦔</span>
									</button>
								</li>
								<li>
									<button aria-label="🦇, bat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦇</span>
									</button>
								</li>
								<li>
									<button aria-label="🐻, bear" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐻</span>
									</button>
								</li>
								<li>
									<button aria-label="🐨, koala" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐨</span>
									</button>
								</li>
								<li>
									<button aria-label="🐼, panda_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐼</span>
									</button>
								</li>
								<li>
									<button aria-label="🦥, sloth" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦥</span>
									</button>
								</li>
								<li>
									<button aria-label="🦦, otter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦦</span>
									</button>
								</li>
								<li>
									<button aria-label="🦨, skunk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦨</span>
									</button>
								</li>
								<li>
									<button aria-label="🦘, kangaroo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦘</span>
									</button>
								</li>
								<li>
									<button aria-label="🦡, badger" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦡</span>
									</button>
								</li>
								<li>
									<button aria-label="🐾, feet, paw_prints" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐾</span>
									</button>
								</li>
								<li>
									<button aria-label="🦃, turkey" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦃</span>
									</button>
								</li>
								<li>
									<button aria-label="🐔, chicken" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐔</span>
									</button>
								</li>
								<li>
									<button aria-label="🐓, rooster" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐓</span>
									</button>
								</li>
								<li>
									<button aria-label="🐣, hatching_chick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐣</span>
									</button>
								</li>
								<li>
									<button aria-label="🐤, baby_chick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐤</span>
									</button>
								</li>
								<li>
									<button aria-label="🐥, hatched_chick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐥</span>
									</button>
								</li>
								<li>
									<button aria-label="🐦, bird" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐦</span>
									</button>
								</li>
								<li>
									<button aria-label="🐧, penguin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐧</span>
									</button>
								</li>
								<li>
									<button aria-label="🕊️, dove_of_peace" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕊️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦅, eagle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦅</span>
									</button>
								</li>
								<li>
									<button aria-label="🦆, duck" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦆</span>
									</button>
								</li>
								<li>
									<button aria-label="🦢, swan" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦢</span>
									</button>
								</li>
								<li>
									<button aria-label="🦉, owl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦉</span>
									</button>
								</li>
								<li>
									<button aria-label="🦩, flamingo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦩</span>
									</button>
								</li>
								<li>
									<button aria-label="🦚, peacock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦚</span>
									</button>
								</li>
								<li>
									<button aria-label="🦜, parrot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦜</span>
									</button>
								</li>
								<li>
									<button aria-label="🐸, frog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐸</span>
									</button>
								</li>
								<li>
									<button aria-label="🐊, crocodile" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐊</span>
									</button>
								</li>
								<li>
									<button aria-label="🐢, turtle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐢</span>
									</button>
								</li>
								<li>
									<button aria-label="🦎, lizard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦎</span>
									</button>
								</li>
								<li>
									<button aria-label="🐍, snake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐍</span>
									</button>
								</li>
								<li>
									<button aria-label="🐲, dragon_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐲</span>
									</button>
								</li>
								<li>
									<button aria-label="🐉, dragon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐉</span>
									</button>
								</li>
								<li>
									<button aria-label="🦕, sauropod" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦕</span>
									</button>
								</li>
								<li>
									<button aria-label="🦖, t-rex" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦖</span>
									</button>
								</li>
								<li>
									<button aria-label="🐳, whale" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐳</span>
									</button>
								</li>
								<li>
									<button aria-label="🐋, whale2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐋</span>
									</button>
								</li>
								<li>
									<button aria-label="🐬, dolphin, flipper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐬</span>
									</button>
								</li>
								<li>
									<button aria-label="🐟, fish" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐟</span>
									</button>
								</li>
								<li>
									<button aria-label="🐠, tropical_fish" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐠</span>
									</button>
								</li>
								<li>
									<button aria-label="🐡, blowfish" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐡</span>
									</button>
								</li>
								<li>
									<button aria-label="🦈, shark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦈</span>
									</button>
								</li>
								<li>
									<button aria-label="🐙, octopus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐙</span>
									</button>
								</li>
								<li>
									<button aria-label="🐚, shell" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐚</span>
									</button>
								</li>
								<li>
									<button aria-label="🐌, snail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐌</span>
									</button>
								</li>
								<li>
									<button aria-label="🦋, butterfly" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦋</span>
									</button>
								</li>
								<li>
									<button aria-label="🐛, bug" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐛</span>
									</button>
								</li>
								<li>
									<button aria-label="🐜, ant" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐜</span>
									</button>
								</li>
								<li>
									<button aria-label="🐝, bee, honeybee" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐝</span>
									</button>
								</li>
								<li>
									<button aria-label="🐞, beetle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🐞</span>
									</button>
								</li>
								<li>
									<button aria-label="🦗, cricket" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦗</span>
									</button>
								</li>
								<li>
									<button aria-label="🕷️, spider" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕷️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕸️, spider_web" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕸️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦂, scorpion" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦂</span>
									</button>
								</li>
								<li>
									<button aria-label="🦟, mosquito" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦟</span>
									</button>
								</li>
								<li>
									<button aria-label="🦠, microbe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦠</span>
									</button>
								</li>
								<li>
									<button aria-label="💐, bouquet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💐</span>
									</button>
								</li>
								<li>
									<button aria-label="🌸, cherry_blossom" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌸</span>
									</button>
								</li>
								<li>
									<button aria-label="💮, white_flower" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💮</span>
									</button>
								</li>
								<li>
									<button aria-label="🏵️, rosette" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏵️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌹, rose" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌹</span>
									</button>
								</li>
								<li>
									<button aria-label="🥀, wilted_flower" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥀</span>
									</button>
								</li>
								<li>
									<button aria-label="🌺, hibiscus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌺</span>
									</button>
								</li>
								<li>
									<button aria-label="🌻, sunflower" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌻</span>
									</button>
								</li>
								<li>
									<button aria-label="🌼, blossom" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌼</span>
									</button>
								</li>
								<li>
									<button aria-label="🌷, tulip" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌷</span>
									</button>
								</li>
								<li>
									<button aria-label="🌱, seedling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌱</span>
									</button>
								</li>
								<li>
									<button aria-label="🌲, evergreen_tree" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌲</span>
									</button>
								</li>
								<li>
									<button aria-label="🌳, deciduous_tree" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌳</span>
									</button>
								</li>
								<li>
									<button aria-label="🌴, palm_tree" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌴</span>
									</button>
								</li>
								<li>
									<button aria-label="🌵, cactus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌵</span>
									</button>
								</li>
								<li>
									<button aria-label="🌾, ear_of_rice" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌾</span>
									</button>
								</li>
								<li>
									<button aria-label="🌿, herb" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌿</span>
									</button>
								</li>
								<li>
									<button aria-label="☘️, shamrock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☘️</span>
									</button>
								</li>
								<li>
									<button aria-label="🍀, four_leaf_clover" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍀</span>
									</button>
								</li>
								<li>
									<button aria-label="🍁, maple_leaf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍁</span>
									</button>
								</li>
								<li>
									<button aria-label="🍂, fallen_leaf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍂</span>
									</button>
								</li>
								<li>
									<button aria-label="🍃, leaves" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍃</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Food &amp; Drink" style="display: inherit;">
							<div data-name="Food &amp; Drink" class="emoji-mart-category-label">
								<span aria-hidden="true">Food &amp; Drink</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="🍇, grapes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍇</span>
									</button>
								</li>
								<li>
									<button aria-label="🍈, melon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍈</span>
									</button>
								</li>
								<li>
									<button aria-label="🍉, watermelon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍉</span>
									</button>
								</li>
								<li>
									<button aria-label="🍊, tangerine" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍊</span>
									</button>
								</li>
								<li>
									<button aria-label="🍋, lemon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍋</span>
									</button>
								</li>
								<li>
									<button aria-label="🍌, banana" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍌</span>
									</button>
								</li>
								<li>
									<button aria-label="🍍, pineapple" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍍</span>
									</button>
								</li>
								<li>
									<button aria-label="🥭, mango" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥭</span>
									</button>
								</li>
								<li>
									<button aria-label="🍎, apple" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍎</span>
									</button>
								</li>
								<li>
									<button aria-label="🍏, green_apple" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍏</span>
									</button>
								</li>
								<li>
									<button aria-label="🍐, pear" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍐</span>
									</button>
								</li>
								<li>
									<button aria-label="🍑, peach" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍑</span>
									</button>
								</li>
								<li>
									<button aria-label="🍒, cherries" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍒</span>
									</button>
								</li>
								<li>
									<button aria-label="🍓, strawberry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍓</span>
									</button>
								</li>
								<li>
									<button aria-label="🥝, kiwifruit" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥝</span>
									</button>
								</li>
								<li>
									<button aria-label="🍅, tomato" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍅</span>
									</button>
								</li>
								<li>
									<button aria-label="🥥, coconut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥥</span>
									</button>
								</li>
								<li>
									<button aria-label="🥑, avocado" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥑</span>
									</button>
								</li>
								<li>
									<button aria-label="🍆, eggplant" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍆</span>
									</button>
								</li>
								<li>
									<button aria-label="🥔, potato" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥔</span>
									</button>
								</li>
								<li>
									<button aria-label="🥕, carrot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥕</span>
									</button>
								</li>
								<li>
									<button aria-label="🌽, corn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌽</span>
									</button>
								</li>
								<li>
									<button aria-label="🌶️, hot_pepper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌶️</span>
									</button>
								</li>
								<li>
									<button aria-label="🥒, cucumber" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥒</span>
									</button>
								</li>
								<li>
									<button aria-label="🥬, leafy_green" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥬</span>
									</button>
								</li>
								<li>
									<button aria-label="🥦, broccoli" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥦</span>
									</button>
								</li>
								<li>
									<button aria-label="🧄, garlic" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧄</span>
									</button>
								</li>
								<li>
									<button aria-label="🧅, onion" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧅</span>
									</button>
								</li>
								<li>
									<button aria-label="🍄, mushroom" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍄</span>
									</button>
								</li>
								<li>
									<button aria-label="🥜, peanuts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥜</span>
									</button>
								</li>
								<li>
									<button aria-label="🌰, chestnut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌰</span>
									</button>
								</li>
								<li>
									<button aria-label="🍞, bread" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍞</span>
									</button>
								</li>
								<li>
									<button aria-label="🥐, croissant" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥐</span>
									</button>
								</li>
								<li>
									<button aria-label="🥖, baguette_bread" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥖</span>
									</button>
								</li>
								<li>
									<button aria-label="🥨, pretzel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥨</span>
									</button>
								</li>
								<li>
									<button aria-label="🥯, bagel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥯</span>
									</button>
								</li>
								<li>
									<button aria-label="🥞, pancakes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥞</span>
									</button>
								</li>
								<li>
									<button aria-label="🧇, waffle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧇</span>
									</button>
								</li>
								<li>
									<button aria-label="🧀, cheese_wedge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧀</span>
									</button>
								</li>
								<li>
									<button aria-label="🍖, meat_on_bone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍖</span>
									</button>
								</li>
								<li>
									<button aria-label="🍗, poultry_leg" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍗</span>
									</button>
								</li>
								<li>
									<button aria-label="🥩, cut_of_meat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥩</span>
									</button>
								</li>
								<li>
									<button aria-label="🥓, bacon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥓</span>
									</button>
								</li>
								<li>
									<button aria-label="🍔, hamburger" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍔</span>
									</button>
								</li>
								<li>
									<button aria-label="🍟, fries" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍟</span>
									</button>
								</li>
								<li>
									<button aria-label="🍕, pizza" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍕</span>
									</button>
								</li>
								<li>
									<button aria-label="🌭, hotdog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌭</span>
									</button>
								</li>
								<li>
									<button aria-label="🥪, sandwich" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥪</span>
									</button>
								</li>
								<li>
									<button aria-label="🌮, taco" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌮</span>
									</button>
								</li>
								<li>
									<button aria-label="🌯, burrito" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌯</span>
									</button>
								</li>
								<li>
									<button aria-label="🥙, stuffed_flatbread" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥙</span>
									</button>
								</li>
								<li>
									<button aria-label="🧆, falafel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧆</span>
									</button>
								</li>
								<li>
									<button aria-label="🥚, egg" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥚</span>
									</button>
								</li>
								<li>
									<button aria-label="🍳, fried_egg, cooking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍳</span>
									</button>
								</li>
								<li>
									<button aria-label="🥘, shallow_pan_of_food" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥘</span>
									</button>
								</li>
								<li>
									<button aria-label="🍲, stew" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍲</span>
									</button>
								</li>
								<li>
									<button aria-label="🥣, bowl_with_spoon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥣</span>
									</button>
								</li>
								<li>
									<button aria-label="🥗, green_salad" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥗</span>
									</button>
								</li>
								<li>
									<button aria-label="🍿, popcorn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍿</span>
									</button>
								</li>
								<li>
									<button aria-label="🧈, butter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧈</span>
									</button>
								</li>
								<li>
									<button aria-label="🧂, salt" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧂</span>
									</button>
								</li>
								<li>
									<button aria-label="🥫, canned_food" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥫</span>
									</button>
								</li>
								<li>
									<button aria-label="🍱, bento" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍱</span>
									</button>
								</li>
								<li>
									<button aria-label="🍘, rice_cracker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍘</span>
									</button>
								</li>
								<li>
									<button aria-label="🍙, rice_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍙</span>
									</button>
								</li>
								<li>
									<button aria-label="🍚, rice" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍚</span>
									</button>
								</li>
								<li>
									<button aria-label="🍛, curry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍛</span>
									</button>
								</li>
								<li>
									<button aria-label="🍜, ramen" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍜</span>
									</button>
								</li>
								<li>
									<button aria-label="🍝, spaghetti" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍝</span>
									</button>
								</li>
								<li>
									<button aria-label="🍠, sweet_potato" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍠</span>
									</button>
								</li>
								<li>
									<button aria-label="🍢, oden" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍢</span>
									</button>
								</li>
								<li>
									<button aria-label="🍣, sushi" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍣</span>
									</button>
								</li>
								<li>
									<button aria-label="🍤, fried_shrimp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍤</span>
									</button>
								</li>
								<li>
									<button aria-label="🍥, fish_cake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍥</span>
									</button>
								</li>
								<li>
									<button aria-label="🥮, moon_cake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥮</span>
									</button>
								</li>
								<li>
									<button aria-label="🍡, dango" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍡</span>
									</button>
								</li>
								<li>
									<button aria-label="🥟, dumpling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥟</span>
									</button>
								</li>
								<li>
									<button aria-label="🥠, fortune_cookie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥠</span>
									</button>
								</li>
								<li>
									<button aria-label="🥡, takeout_box" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥡</span>
									</button>
								</li>
								<li>
									<button aria-label="🦀, crab" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦀</span>
									</button>
								</li>
								<li>
									<button aria-label="🦞, lobster" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦞</span>
									</button>
								</li>
								<li>
									<button aria-label="🦐, shrimp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦐</span>
									</button>
								</li>
								<li>
									<button aria-label="🦑, squid" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦑</span>
									</button>
								</li>
								<li>
									<button aria-label="🦪, oyster" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦪</span>
									</button>
								</li>
								<li>
									<button aria-label="🍦, icecream" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍦</span>
									</button>
								</li>
								<li>
									<button aria-label="🍧, shaved_ice" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍧</span>
									</button>
								</li>
								<li>
									<button aria-label="🍨, ice_cream" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍨</span>
									</button>
								</li>
								<li>
									<button aria-label="🍩, doughnut" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍩</span>
									</button>
								</li>
								<li>
									<button aria-label="🍪, cookie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍪</span>
									</button>
								</li>
								<li>
									<button aria-label="🎂, birthday" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎂</span>
									</button>
								</li>
								<li>
									<button aria-label="🍰, cake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍰</span>
									</button>
								</li>
								<li>
									<button aria-label="🧁, cupcake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧁</span>
									</button>
								</li>
								<li>
									<button aria-label="🥧, pie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥧</span>
									</button>
								</li>
								<li>
									<button aria-label="🍫, chocolate_bar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍫</span>
									</button>
								</li>
								<li>
									<button aria-label="🍬, candy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍬</span>
									</button>
								</li>
								<li>
									<button aria-label="🍭, lollipop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍭</span>
									</button>
								</li>
								<li>
									<button aria-label="🍮, custard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍮</span>
									</button>
								</li>
								<li>
									<button aria-label="🍯, honey_pot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍯</span>
									</button>
								</li>
								<li>
									<button aria-label="🍼, baby_bottle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍼</span>
									</button>
								</li>
								<li>
									<button aria-label="🥛, glass_of_milk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥛</span>
									</button>
								</li>
								<li>
									<button aria-label="☕, coffee" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☕</span>
									</button>
								</li>
								<li>
									<button aria-label="🍵, tea" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍵</span>
									</button>
								</li>
								<li>
									<button aria-label="🍶, sake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍶</span>
									</button>
								</li>
								<li>
									<button aria-label="🍾, champagne" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍾</span>
									</button>
								</li>
								<li>
									<button aria-label="🍷, wine_glass" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍷</span>
									</button>
								</li>
								<li>
									<button aria-label="🍸, cocktail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍸</span>
									</button>
								</li>
								<li>
									<button aria-label="🍹, tropical_drink" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍹</span>
									</button>
								</li>
								<li>
									<button aria-label="🍺, beer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍺</span>
									</button>
								</li>
								<li>
									<button aria-label="🍻, beers" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍻</span>
									</button>
								</li>
								<li>
									<button aria-label="🥂, clinking_glasses" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥂</span>
									</button>
								</li>
								<li>
									<button aria-label="🥃, tumbler_glass" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥃</span>
									</button>
								</li>
								<li>
									<button aria-label="🥤, cup_with_straw" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥤</span>
									</button>
								</li>
								<li>
									<button aria-label="🧃, beverage_box" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧃</span>
									</button>
								</li>
								<li>
									<button aria-label="🧉, mate_drink" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧉</span>
									</button>
								</li>
								<li>
									<button aria-label="🧊, ice_cube" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧊</span>
									</button>
								</li>
								<li>
									<button aria-label="🥢, chopsticks" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥢</span>
									</button>
								</li>
								<li>
									<button aria-label="🍽️, knife_fork_plate" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍽️</span>
									</button>
								</li>
								<li>
									<button aria-label="🍴, fork_and_knife" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🍴</span>
									</button>
								</li>
								<li>
									<button aria-label="🥄, spoon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥄</span>
									</button>
								</li>
								<li>
									<button aria-label="🔪, hocho, knife" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔪</span>
									</button>
								</li>
								<li>
									<button aria-label="🏺, amphora" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏺</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Activity" style="display: inherit;">
							<div data-name="Activity" class="emoji-mart-category-label">
								<span aria-hidden="true">Activity</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="🎃, jack_o_lantern" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎃</span>
									</button>
								</li>
								<li>
									<button aria-label="🎄, christmas_tree" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎄</span>
									</button>
								</li>
								<li>
									<button aria-label="🎆, fireworks" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎆</span>
									</button>
								</li>
								<li>
									<button aria-label="🎇, sparkler" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎇</span>
									</button>
								</li>
								<li>
									<button aria-label="🧨, firecracker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧨</span>
									</button>
								</li>
								<li>
									<button aria-label="✨, sparkles" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✨</span>
									</button>
								</li>
								<li>
									<button aria-label="🎈, balloon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎈</span>
									</button>
								</li>
								<li>
									<button aria-label="🎉, tada" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎉</span>
									</button>
								</li>
								<li>
									<button aria-label="🎊, confetti_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎊</span>
									</button>
								</li>
								<li>
									<button aria-label="🎋, tanabata_tree" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎋</span>
									</button>
								</li>
								<li>
									<button aria-label="🎍, bamboo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎍</span>
									</button>
								</li>
								<li>
									<button aria-label="🎎, dolls" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎎</span>
									</button>
								</li>
								<li>
									<button aria-label="🎏, flags" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎏</span>
									</button>
								</li>
								<li>
									<button aria-label="🎐, wind_chime" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎐</span>
									</button>
								</li>
								<li>
									<button aria-label="🎑, rice_scene" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎑</span>
									</button>
								</li>
								<li>
									<button aria-label="🧧, red_envelope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧧</span>
									</button>
								</li>
								<li>
									<button aria-label="🎀, ribbon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎀</span>
									</button>
								</li>
								<li>
									<button aria-label="🎁, gift" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎁</span>
									</button>
								</li>
								<li>
									<button aria-label="🎗️, reminder_ribbon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎗️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎟️, admission_tickets" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎟️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎫, ticket" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎫</span>
									</button>
								</li>
								<li>
									<button aria-label="🎖️, medal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎖️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏆, trophy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏆</span>
									</button>
								</li>
								<li>
									<button aria-label="🏅, sports_medal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏅</span>
									</button>
								</li>
								<li>
									<button aria-label="🥇, first_place_medal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥇</span>
									</button>
								</li>
								<li>
									<button aria-label="🥈, second_place_medal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥈</span>
									</button>
								</li>
								<li>
									<button aria-label="🥉, third_place_medal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥉</span>
									</button>
								</li>
								<li>
									<button aria-label="⚽, soccer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚽</span>
									</button>
								</li>
								<li>
									<button aria-label="⚾, baseball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚾</span>
									</button>
								</li>
								<li>
									<button aria-label="🥎, softball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥎</span>
									</button>
								</li>
								<li>
									<button aria-label="🏀, basketball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏀</span>
									</button>
								</li>
								<li>
									<button aria-label="🏐, volleyball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏐</span>
									</button>
								</li>
								<li>
									<button aria-label="🏈, football" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏈</span>
									</button>
								</li>
								<li>
									<button aria-label="🏉, rugby_football" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏉</span>
									</button>
								</li>
								<li>
									<button aria-label="🎾, tennis" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎾</span>
									</button>
								</li>
								<li>
									<button aria-label="🥏, flying_disc" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥏</span>
									</button>
								</li>
								<li>
									<button aria-label="🎳, bowling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎳</span>
									</button>
								</li>
								<li>
									<button aria-label="🏏, cricket_bat_and_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏏</span>
									</button>
								</li>
								<li>
									<button aria-label="🏑, field_hockey_stick_and_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏑</span>
									</button>
								</li>
								<li>
									<button aria-label="🏒, ice_hockey_stick_and_puck" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏒</span>
									</button>
								</li>
								<li>
									<button aria-label="🥍, lacrosse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥍</span>
									</button>
								</li>
								<li>
									<button aria-label="🏓, table_tennis_paddle_and_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏓</span>
									</button>
								</li>
								<li>
									<button aria-label="🏸, badminton_racquet_and_shuttlecock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏸</span>
									</button>
								</li>
								<li>
									<button aria-label="🥊, boxing_glove" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥊</span>
									</button>
								</li>
								<li>
									<button aria-label="🥋, martial_arts_uniform" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥋</span>
									</button>
								</li>
								<li>
									<button aria-label="🥅, goal_net" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥅</span>
									</button>
								</li>
								<li>
									<button aria-label="⛳, golf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛳</span>
									</button>
								</li>
								<li>
									<button aria-label="⛸️, ice_skate" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛸️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎣, fishing_pole_and_fish" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎣</span>
									</button>
								</li>
								<li>
									<button aria-label="🤿, diving_mask" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🤿</span>
									</button>
								</li>
								<li>
									<button aria-label="🎽, running_shirt_with_sash" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎽</span>
									</button>
								</li>
								<li>
									<button aria-label="🎿, ski" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎿</span>
									</button>
								</li>
								<li>
									<button aria-label="🛷, sled" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛷</span>
									</button>
								</li>
								<li>
									<button aria-label="🥌, curling_stone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥌</span>
									</button>
								</li>
								<li>
									<button aria-label="🎯, dart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎯</span>
									</button>
								</li>
								<li>
									<button aria-label="🪀, yo-yo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪀</span>
									</button>
								</li>
								<li>
									<button aria-label="🪁, kite" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪁</span>
									</button>
								</li>
								<li>
									<button aria-label="🎱, 8ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎱</span>
									</button>
								</li>
								<li>
									<button aria-label="🔮, crystal_ball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔮</span>
									</button>
								</li>
								<li>
									<button aria-label="🧿, nazar_amulet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧿</span>
									</button>
								</li>
								<li>
									<button aria-label="🎮, video_game" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎮</span>
									</button>
								</li>
								<li>
									<button aria-label="🕹️, joystick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕹️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎰, slot_machine" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎰</span>
									</button>
								</li>
								<li>
									<button aria-label="🎲, game_die" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎲</span>
									</button>
								</li>
								<li>
									<button aria-label="🧩, jigsaw" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧩</span>
									</button>
								</li>
								<li>
									<button aria-label="🧸, teddy_bear" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧸</span>
									</button>
								</li>
								<li>
									<button aria-label="♠️, spades" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♠️</span>
									</button>
								</li>
								<li>
									<button aria-label="♥️, hearts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♥️</span>
									</button>
								</li>
								<li>
									<button aria-label="♦️, diamonds" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♦️</span>
									</button>
								</li>
								<li>
									<button aria-label="♣️, clubs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♣️</span>
									</button>
								</li>
								<li>
									<button aria-label="♟️, chess_pawn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♟️</span>
									</button>
								</li>
								<li>
									<button aria-label="🃏, black_joker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🃏</span>
									</button>
								</li>
								<li>
									<button aria-label="🀄, mahjong" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🀄</span>
									</button>
								</li>
								<li>
									<button aria-label="🎴, flower_playing_cards" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎴</span>
									</button>
								</li>
								<li>
									<button aria-label="🎭, performing_arts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎭</span>
									</button>
								</li>
								<li>
									<button aria-label="🖼️, frame_with_picture" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖼️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎨, art" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎨</span>
									</button>
								</li>
								<li>
									<button aria-label="🧵, thread" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧵</span>
									</button>
								</li>
								<li>
									<button aria-label="🧶, yarn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧶</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Travel &amp; Places" style="display: inherit;">
							<div data-name="Travel &amp; Places" class="emoji-mart-category-label">
								<span aria-hidden="true">Travel &amp; Places</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="🌍, earth_africa" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌍</span>
									</button>
								</li>
								<li>
									<button aria-label="🌎, earth_americas" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌎</span>
									</button>
								</li>
								<li>
									<button aria-label="🌏, earth_asia" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌏</span>
									</button>
								</li>
								<li>
									<button aria-label="🌐, globe_with_meridians" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌐</span>
									</button>
								</li>
								<li>
									<button aria-label="🗺️, world_map" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗺️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗾, japan" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗾</span>
									</button>
								</li>
								<li>
									<button aria-label="🧭, compass" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧭</span>
									</button>
								</li>
								<li>
									<button aria-label="🏔️, snow_capped_mountain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏔️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛰️, mountain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛰️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌋, volcano" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌋</span>
									</button>
								</li>
								<li>
									<button aria-label="🗻, mount_fuji" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗻</span>
									</button>
								</li>
								<li>
									<button aria-label="🏕️, camping" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏕️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏖️, beach_with_umbrella" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏖️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏜️, desert" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏜️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏝️, desert_island" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏝️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏞️, national_park" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏞️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏟️, stadium" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏟️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏛️, classical_building" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏛️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏗️, building_construction" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏗️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧱, bricks" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧱</span>
									</button>
								</li>
								<li>
									<button aria-label="🏘️, house_buildings" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏘️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏚️, derelict_house_building" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏚️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏠, house" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏠</span>
									</button>
								</li>
								<li>
									<button aria-label="🏡, house_with_garden" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏡</span>
									</button>
								</li>
								<li>
									<button aria-label="🏢, office" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏢</span>
									</button>
								</li>
								<li>
									<button aria-label="🏣, post_office" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏣</span>
									</button>
								</li>
								<li>
									<button aria-label="🏤, european_post_office" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏤</span>
									</button>
								</li>
								<li>
									<button aria-label="🏥, hospital" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏥</span>
									</button>
								</li>
								<li>
									<button aria-label="🏦, bank" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏦</span>
									</button>
								</li>
								<li>
									<button aria-label="🏨, hotel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏨</span>
									</button>
								</li>
								<li>
									<button aria-label="🏩, love_hotel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏩</span>
									</button>
								</li>
								<li>
									<button aria-label="🏪, convenience_store" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏪</span>
									</button>
								</li>
								<li>
									<button aria-label="🏫, school" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏫</span>
									</button>
								</li>
								<li>
									<button aria-label="🏬, department_store" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏬</span>
									</button>
								</li>
								<li>
									<button aria-label="🏭, factory" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏭</span>
									</button>
								</li>
								<li>
									<button aria-label="🏯, japanese_castle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏯</span>
									</button>
								</li>
								<li>
									<button aria-label="🏰, european_castle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏰</span>
									</button>
								</li>
								<li>
									<button aria-label="💒, wedding" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💒</span>
									</button>
								</li>
								<li>
									<button aria-label="🗼, tokyo_tower" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗼</span>
									</button>
								</li>
								<li>
									<button aria-label="🗽, statue_of_liberty" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗽</span>
									</button>
								</li>
								<li>
									<button aria-label="⛪, church" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛪</span>
									</button>
								</li>
								<li>
									<button aria-label="🕌, mosque" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕌</span>
									</button>
								</li>
								<li>
									<button aria-label="🛕, hindu_temple" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛕</span>
									</button>
								</li>
								<li>
									<button aria-label="🕍, synagogue" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕍</span>
									</button>
								</li>
								<li>
									<button aria-label="⛩️, shinto_shrine" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛩️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕋, kaaba" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕋</span>
									</button>
								</li>
								<li>
									<button aria-label="⛲, fountain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛲</span>
									</button>
								</li>
								<li>
									<button aria-label="⛺, tent" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛺</span>
									</button>
								</li>
								<li>
									<button aria-label="🌁, foggy" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌁</span>
									</button>
								</li>
								<li>
									<button aria-label="🌃, night_with_stars" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌃</span>
									</button>
								</li>
								<li>
									<button aria-label="🏙️, cityscape" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏙️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌄, sunrise_over_mountains" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌄</span>
									</button>
								</li>
								<li>
									<button aria-label="🌅, sunrise" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌅</span>
									</button>
								</li>
								<li>
									<button aria-label="🌆, city_sunset" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌆</span>
									</button>
								</li>
								<li>
									<button aria-label="🌇, city_sunrise" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌇</span>
									</button>
								</li>
								<li>
									<button aria-label="🌉, bridge_at_night" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌉</span>
									</button>
								</li>
								<li>
									<button aria-label="♨️, hotsprings" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♨️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎠, carousel_horse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎠</span>
									</button>
								</li>
								<li>
									<button aria-label="🎡, ferris_wheel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎡</span>
									</button>
								</li>
								<li>
									<button aria-label="🎢, roller_coaster" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎢</span>
									</button>
								</li>
								<li>
									<button aria-label="💈, barber" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💈</span>
									</button>
								</li>
								<li>
									<button aria-label="🎪, circus_tent" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎪</span>
									</button>
								</li>
								<li>
									<button aria-label="🚂, steam_locomotive" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚂</span>
									</button>
								</li>
								<li>
									<button aria-label="🚃, railway_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚃</span>
									</button>
								</li>
								<li>
									<button aria-label="🚄, bullettrain_side" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚄</span>
									</button>
								</li>
								<li>
									<button aria-label="🚅, bullettrain_front" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚅</span>
									</button>
								</li>
								<li>
									<button aria-label="🚆, train2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚆</span>
									</button>
								</li>
								<li>
									<button aria-label="🚇, metro" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚇</span>
									</button>
								</li>
								<li>
									<button aria-label="🚈, light_rail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚈</span>
									</button>
								</li>
								<li>
									<button aria-label="🚉, station" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚉</span>
									</button>
								</li>
								<li>
									<button aria-label="🚊, tram" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚊</span>
									</button>
								</li>
								<li>
									<button aria-label="🚝, monorail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚝</span>
									</button>
								</li>
								<li>
									<button aria-label="🚞, mountain_railway" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚞</span>
									</button>
								</li>
								<li>
									<button aria-label="🚋, train" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚋</span>
									</button>
								</li>
								<li>
									<button aria-label="🚌, bus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚌</span>
									</button>
								</li>
								<li>
									<button aria-label="🚍, oncoming_bus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚍</span>
									</button>
								</li>
								<li>
									<button aria-label="🚎, trolleybus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚎</span>
									</button>
								</li>
								<li>
									<button aria-label="🚐, minibus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚐</span>
									</button>
								</li>
								<li>
									<button aria-label="🚑, ambulance" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚑</span>
									</button>
								</li>
								<li>
									<button aria-label="🚒, fire_engine" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚒</span>
									</button>
								</li>
								<li>
									<button aria-label="🚓, police_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚓</span>
									</button>
								</li>
								<li>
									<button aria-label="🚔, oncoming_police_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚔</span>
									</button>
								</li>
								<li>
									<button aria-label="🚕, taxi" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚕</span>
									</button>
								</li>
								<li>
									<button aria-label="🚖, oncoming_taxi" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚖</span>
									</button>
								</li>
								<li>
									<button aria-label="🚗, car, red_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚗</span>
									</button>
								</li>
								<li>
									<button aria-label="🚘, oncoming_automobile" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚘</span>
									</button>
								</li>
								<li>
									<button aria-label="🚙, blue_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚙</span>
									</button>
								</li>
								<li>
									<button aria-label="🚚, truck" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚚</span>
									</button>
								</li>
								<li>
									<button aria-label="🚛, articulated_lorry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚛</span>
									</button>
								</li>
								<li>
									<button aria-label="🚜, tractor" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚜</span>
									</button>
								</li>
								<li>
									<button aria-label="🏎️, racing_car" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏎️</span>
									</button>
								</li>
								<li>
									<button aria-label="🏍️, racing_motorcycle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏍️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛵, motor_scooter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛵</span>
									</button>
								</li>
								<li>
									<button aria-label="🦽, manual_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦽</span>
									</button>
								</li>
								<li>
									<button aria-label="🦼, motorized_wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦼</span>
									</button>
								</li>
								<li>
									<button aria-label="🛺, auto_rickshaw" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛺</span>
									</button>
								</li>
								<li>
									<button aria-label="🚲, bike" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚲</span>
									</button>
								</li>
								<li>
									<button aria-label="🛴, scooter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛴</span>
									</button>
								</li>
								<li>
									<button aria-label="🛹, skateboard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛹</span>
									</button>
								</li>
								<li>
									<button aria-label="🚏, busstop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚏</span>
									</button>
								</li>
								<li>
									<button aria-label="🛣️, motorway" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛣️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛤️, railway_track" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛤️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛢️, oil_drum" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛢️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛽, fuelpump" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛽</span>
									</button>
								</li>
								<li>
									<button aria-label="🚨, rotating_light" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚨</span>
									</button>
								</li>
								<li>
									<button aria-label="🚥, traffic_light" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚥</span>
									</button>
								</li>
								<li>
									<button aria-label="🚦, vertical_traffic_light" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚦</span>
									</button>
								</li>
								<li>
									<button aria-label="🛑, octagonal_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛑</span>
									</button>
								</li>
								<li>
									<button aria-label="🚧, construction" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚧</span>
									</button>
								</li>
								<li>
									<button aria-label="⚓, anchor" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚓</span>
									</button>
								</li>
								<li>
									<button aria-label="⛵, boat, sailboat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛵</span>
									</button>
								</li>
								<li>
									<button aria-label="🛶, canoe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛶</span>
									</button>
								</li>
								<li>
									<button aria-label="🚤, speedboat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚤</span>
									</button>
								</li>
								<li>
									<button aria-label="🛳️, passenger_ship" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛳️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛴️, ferry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛴️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛥️, motor_boat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛥️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚢, ship" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚢</span>
									</button>
								</li>
								<li>
									<button aria-label="✈️, airplane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✈️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛩️, small_airplane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛩️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛫, airplane_departure" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛫</span>
									</button>
								</li>
								<li>
									<button aria-label="🛬, airplane_arriving" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛬</span>
									</button>
								</li>
								<li>
									<button aria-label="🪂, parachute" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪂</span>
									</button>
								</li>
								<li>
									<button aria-label="💺, seat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💺</span>
									</button>
								</li>
								<li>
									<button aria-label="🚁, helicopter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚁</span>
									</button>
								</li>
								<li>
									<button aria-label="🚟, suspension_railway" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚟</span>
									</button>
								</li>
								<li>
									<button aria-label="🚠, mountain_cableway" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚠</span>
									</button>
								</li>
								<li>
									<button aria-label="🚡, aerial_tramway" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚡</span>
									</button>
								</li>
								<li>
									<button aria-label="🛰️, satellite" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛰️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚀, rocket" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚀</span>
									</button>
								</li>
								<li>
									<button aria-label="🛸, flying_saucer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛸</span>
									</button>
								</li>
								<li>
									<button aria-label="🛎️, bellhop_bell" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛎️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧳, luggage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧳</span>
									</button>
								</li>
								<li>
									<button aria-label="⌛, hourglass" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⌛</span>
									</button>
								</li>
								<li>
									<button aria-label="⏳, hourglass_flowing_sand" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏳</span>
									</button>
								</li>
								<li>
									<button aria-label="⌚, watch" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⌚</span>
									</button>
								</li>
								<li>
									<button aria-label="⏰, alarm_clock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏰</span>
									</button>
								</li>
								<li>
									<button aria-label="⏱️, stopwatch" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏱️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏲️, timer_clock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏲️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕰️, mantelpiece_clock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕰️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕛, clock12" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕛</span>
									</button>
								</li>
								<li>
									<button aria-label="🕧, clock1230" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕧</span>
									</button>
								</li>
								<li>
									<button aria-label="🕐, clock1" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕐</span>
									</button>
								</li>
								<li>
									<button aria-label="🕜, clock130" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕜</span>
									</button>
								</li>
								<li>
									<button aria-label="🕑, clock2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕑</span>
									</button>
								</li>
								<li>
									<button aria-label="🕝, clock230" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕝</span>
									</button>
								</li>
								<li>
									<button aria-label="🕒, clock3" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕒</span>
									</button>
								</li>
								<li>
									<button aria-label="🕞, clock330" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕞</span>
									</button>
								</li>
								<li>
									<button aria-label="🕓, clock4" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕓</span>
									</button>
								</li>
								<li>
									<button aria-label="🕟, clock430" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕟</span>
									</button>
								</li>
								<li>
									<button aria-label="🕔, clock5" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕔</span>
									</button>
								</li>
								<li>
									<button aria-label="🕠, clock530" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕠</span>
									</button>
								</li>
								<li>
									<button aria-label="🕕, clock6" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕕</span>
									</button>
								</li>
								<li>
									<button aria-label="🕡, clock630" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕡</span>
									</button>
								</li>
								<li>
									<button aria-label="🕖, clock7" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕖</span>
									</button>
								</li>
								<li>
									<button aria-label="🕢, clock730" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕢</span>
									</button>
								</li>
								<li>
									<button aria-label="🕗, clock8" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕗</span>
									</button>
								</li>
								<li>
									<button aria-label="🕣, clock830" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕣</span>
									</button>
								</li>
								<li>
									<button aria-label="🕘, clock9" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕘</span>
									</button>
								</li>
								<li>
									<button aria-label="🕤, clock930" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕤</span>
									</button>
								</li>
								<li>
									<button aria-label="🕙, clock10" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕙</span>
									</button>
								</li>
								<li>
									<button aria-label="🕥, clock1030" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕥</span>
									</button>
								</li>
								<li>
									<button aria-label="🕚, clock11" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕚</span>
									</button>
								</li>
								<li>
									<button aria-label="🕦, clock1130" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕦</span>
									</button>
								</li>
								<li>
									<button aria-label="🌑, new_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌑</span>
									</button>
								</li>
								<li>
									<button aria-label="🌒, waxing_crescent_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌒</span>
									</button>
								</li>
								<li>
									<button aria-label="🌓, first_quarter_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌓</span>
									</button>
								</li>
								<li>
									<button aria-label="🌔, moon, waxing_gibbous_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌔</span>
									</button>
								</li>
								<li>
									<button aria-label="🌕, full_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌕</span>
									</button>
								</li>
								<li>
									<button aria-label="🌖, waning_gibbous_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌖</span>
									</button>
								</li>
								<li>
									<button aria-label="🌗, last_quarter_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌗</span>
									</button>
								</li>
								<li>
									<button aria-label="🌘, waning_crescent_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌘</span>
									</button>
								</li>
								<li>
									<button aria-label="🌙, crescent_moon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌙</span>
									</button>
								</li>
								<li>
									<button aria-label="🌚, new_moon_with_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌚</span>
									</button>
								</li>
								<li>
									<button aria-label="🌛, first_quarter_moon_with_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌛</span>
									</button>
								</li>
								<li>
									<button aria-label="🌜, last_quarter_moon_with_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌜</span>
									</button>
								</li>
								<li>
									<button aria-label="🌡️, thermometer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌡️</span>
									</button>
								</li>
								<li>
									<button aria-label="☀️, sunny" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☀️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌝, full_moon_with_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌝</span>
									</button>
								</li>
								<li>
									<button aria-label="🌞, sun_with_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌞</span>
									</button>
								</li>
								<li>
									<button aria-label="🪐, ringed_planet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪐</span>
									</button>
								</li>
								<li>
									<button aria-label="⭐, star" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⭐</span>
									</button>
								</li>
								<li>
									<button aria-label="🌟, star2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌟</span>
									</button>
								</li>
								<li>
									<button aria-label="🌠, stars" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌠</span>
									</button>
								</li>
								<li>
									<button aria-label="🌌, milky_way" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌌</span>
									</button>
								</li>
								<li>
									<button aria-label="☁️, cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☁️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛅, partly_sunny" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛅</span>
									</button>
								</li>
								<li>
									<button aria-label="⛈️, thunder_cloud_and_rain" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛈️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌤️, mostly_sunny, sun_small_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌤️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌥️, barely_sunny, sun_behind_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌥️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌦️, partly_sunny_rain, sun_behind_rain_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌦️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌧️, rain_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌧️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌨️, snow_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌨️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌩️, lightning, lightning_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌩️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌪️, tornado, tornado_cloud" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌪️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌫️, fog" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌫️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌬️, wind_blowing_face" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌬️</span>
									</button>
								</li>
								<li>
									<button aria-label="🌀, cyclone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌀</span>
									</button>
								</li>
								<li>
									<button aria-label="🌈, rainbow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌈</span>
									</button>
								</li>
								<li>
									<button aria-label="🌂, closed_umbrella" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌂</span>
									</button>
								</li>
								<li>
									<button aria-label="☂️, umbrella" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☂️</span>
									</button>
								</li>
								<li>
									<button aria-label="☔, umbrella_with_rain_drops" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☔</span>
									</button>
								</li>
								<li>
									<button aria-label="⛱️, umbrella_on_ground" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛱️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚡, zap" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚡</span>
									</button>
								</li>
								<li>
									<button aria-label="❄️, snowflake" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❄️</span>
									</button>
								</li>
								<li>
									<button aria-label="☃️, snowman" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☃️</span>
									</button>
								</li>
								<li>
									<button aria-label="⛄, snowman_without_snow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛄</span>
									</button>
								</li>
								<li>
									<button aria-label="☄️, comet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☄️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔥, fire" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔥</span>
									</button>
								</li>
								<li>
									<button aria-label="💧, droplet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💧</span>
									</button>
								</li>
								<li>
									<button aria-label="🌊, ocean" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🌊</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Objects" style="display: inherit;">
							<div data-name="Objects" class="emoji-mart-category-label">
								<span aria-hidden="true">Objects</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="👓, eyeglasses" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👓</span>
									</button>
								</li>
								<li>
									<button aria-label="🕶️, dark_sunglasses" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕶️</span>
									</button>
								</li>
								<li>
									<button aria-label="🥽, goggles" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥽</span>
									</button>
								</li>
								<li>
									<button aria-label="🥼, lab_coat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥼</span>
									</button>
								</li>
								<li>
									<button aria-label="🦺, safety_vest" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦺</span>
									</button>
								</li>
								<li>
									<button aria-label="👔, necktie" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👔</span>
									</button>
								</li>
								<li>
									<button aria-label="👕, shirt, tshirt" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👕</span>
									</button>
								</li>
								<li>
									<button aria-label="👖, jeans" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👖</span>
									</button>
								</li>
								<li>
									<button aria-label="🧣, scarf" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧣</span>
									</button>
								</li>
								<li>
									<button aria-label="🧤, gloves" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧤</span>
									</button>
								</li>
								<li>
									<button aria-label="🧥, coat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧥</span>
									</button>
								</li>
								<li>
									<button aria-label="🧦, socks" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧦</span>
									</button>
								</li>
								<li>
									<button aria-label="👗, dress" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👗</span>
									</button>
								</li>
								<li>
									<button aria-label="👘, kimono" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👘</span>
									</button>
								</li>
								<li>
									<button aria-label="🥻, sari" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥻</span>
									</button>
								</li>
								<li>
									<button aria-label="🩱, one-piece_swimsuit" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩱</span>
									</button>
								</li>
								<li>
									<button aria-label="🩲, briefs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩲</span>
									</button>
								</li>
								<li>
									<button aria-label="🩳, shorts" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩳</span>
									</button>
								</li>
								<li>
									<button aria-label="👙, bikini" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👙</span>
									</button>
								</li>
								<li>
									<button aria-label="👚, womans_clothes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👚</span>
									</button>
								</li>
								<li>
									<button aria-label="👛, purse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👛</span>
									</button>
								</li>
								<li>
									<button aria-label="👜, handbag" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👜</span>
									</button>
								</li>
								<li>
									<button aria-label="👝, pouch" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👝</span>
									</button>
								</li>
								<li>
									<button aria-label="🛍️, shopping_bags" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛍️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎒, school_satchel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎒</span>
									</button>
								</li>
								<li>
									<button aria-label="👞, mans_shoe, shoe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👞</span>
									</button>
								</li>
								<li>
									<button aria-label="👟, athletic_shoe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👟</span>
									</button>
								</li>
								<li>
									<button aria-label="🥾, hiking_boot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥾</span>
									</button>
								</li>
								<li>
									<button aria-label="🥿, womans_flat_shoe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥿</span>
									</button>
								</li>
								<li>
									<button aria-label="👠, high_heel" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👠</span>
									</button>
								</li>
								<li>
									<button aria-label="👡, sandal" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👡</span>
									</button>
								</li>
								<li>
									<button aria-label="🩰, ballet_shoes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩰</span>
									</button>
								</li>
								<li>
									<button aria-label="👢, boot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👢</span>
									</button>
								</li>
								<li>
									<button aria-label="👑, crown" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👑</span>
									</button>
								</li>
								<li>
									<button aria-label="👒, womans_hat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">👒</span>
									</button>
								</li>
								<li>
									<button aria-label="🎩, tophat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎩</span>
									</button>
								</li>
								<li>
									<button aria-label="🎓, mortar_board" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎓</span>
									</button>
								</li>
								<li>
									<button aria-label="🧢, billed_cap" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧢</span>
									</button>
								</li>
								<li>
									<button aria-label="⛑️, helmet_with_white_cross" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛑️</span>
									</button>
								</li>
								<li>
									<button aria-label="📿, prayer_beads" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📿</span>
									</button>
								</li>
								<li>
									<button aria-label="💄, lipstick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💄</span>
									</button>
								</li>
								<li>
									<button aria-label="💍, ring" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💍</span>
									</button>
								</li>
								<li>
									<button aria-label="💎, gem" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💎</span>
									</button>
								</li>
								<li>
									<button aria-label="🔇, mute" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔇</span>
									</button>
								</li>
								<li>
									<button aria-label="🔈, speaker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔈</span>
									</button>
								</li>
								<li>
									<button aria-label="🔉, sound" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔉</span>
									</button>
								</li>
								<li>
									<button aria-label="🔊, loud_sound" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔊</span>
									</button>
								</li>
								<li>
									<button aria-label="📢, loudspeaker" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📢</span>
									</button>
								</li>
								<li>
									<button aria-label="📣, mega" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📣</span>
									</button>
								</li>
								<li>
									<button aria-label="📯, postal_horn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📯</span>
									</button>
								</li>
								<li>
									<button aria-label="🔔, bell" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔔</span>
									</button>
								</li>
								<li>
									<button aria-label="🔕, no_bell" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔕</span>
									</button>
								</li>
								<li>
									<button aria-label="🎼, musical_score" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎼</span>
									</button>
								</li>
								<li>
									<button aria-label="🎵, musical_note" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎵</span>
									</button>
								</li>
								<li>
									<button aria-label="🎶, notes" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎶</span>
									</button>
								</li>
								<li>
									<button aria-label="🎙️, studio_microphone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎙️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎚️, level_slider" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎚️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎛️, control_knobs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎛️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎤, microphone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎤</span>
									</button>
								</li>
								<li>
									<button aria-label="🎧, headphones" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎧</span>
									</button>
								</li>
								<li>
									<button aria-label="📻, radio" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📻</span>
									</button>
								</li>
								<li>
									<button aria-label="🎷, saxophone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎷</span>
									</button>
								</li>
								<li>
									<button aria-label="🎸, guitar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎸</span>
									</button>
								</li>
								<li>
									<button aria-label="🎹, musical_keyboard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎹</span>
									</button>
								</li>
								<li>
									<button aria-label="🎺, trumpet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎺</span>
									</button>
								</li>
								<li>
									<button aria-label="🎻, violin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎻</span>
									</button>
								</li>
								<li>
									<button aria-label="🪕, banjo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪕</span>
									</button>
								</li>
								<li>
									<button aria-label="🥁, drum_with_drumsticks" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🥁</span>
									</button>
								</li>
								<li>
									<button aria-label="📱, iphone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📱</span>
									</button>
								</li>
								<li>
									<button aria-label="📲, calling" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📲</span>
									</button>
								</li>
								<li>
									<button aria-label="☎️, phone, telephone" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☎️</span>
									</button>
								</li>
								<li>
									<button aria-label="📞, telephone_receiver" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📞</span>
									</button>
								</li>
								<li>
									<button aria-label="📟, pager" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📟</span>
									</button>
								</li>
								<li>
									<button aria-label="📠, fax" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📠</span>
									</button>
								</li>
								<li>
									<button aria-label="🔋, battery" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔋</span>
									</button>
								</li>
								<li>
									<button aria-label="🔌, electric_plug" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔌</span>
									</button>
								</li>
								<li>
									<button aria-label="💻, computer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💻</span>
									</button>
								</li>
								<li>
									<button aria-label="🖥️, desktop_computer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖥️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖨️, printer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖨️</span>
									</button>
								</li>
								<li>
									<button aria-label="⌨️, keyboard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⌨️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖱️, three_button_mouse" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖱️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖲️, trackball" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖲️</span>
									</button>
								</li>
								<li>
									<button aria-label="💽, minidisc" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💽</span>
									</button>
								</li>
								<li>
									<button aria-label="💾, floppy_disk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💾</span>
									</button>
								</li>
								<li>
									<button aria-label="💿, cd" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💿</span>
									</button>
								</li>
								<li>
									<button aria-label="📀, dvd" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📀</span>
									</button>
								</li>
								<li>
									<button aria-label="🧮, abacus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧮</span>
									</button>
								</li>
								<li>
									<button aria-label="🎥, movie_camera" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎥</span>
									</button>
								</li>
								<li>
									<button aria-label="🎞️, film_frames" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎞️</span>
									</button>
								</li>
								<li>
									<button aria-label="📽️, film_projector" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📽️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎬, clapper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎬</span>
									</button>
								</li>
								<li>
									<button aria-label="📺, tv" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📺</span>
									</button>
								</li>
								<li>
									<button aria-label="📷, camera" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📷</span>
									</button>
								</li>
								<li>
									<button aria-label="📸, camera_with_flash" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📸</span>
									</button>
								</li>
								<li>
									<button aria-label="📹, video_camera" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📹</span>
									</button>
								</li>
								<li>
									<button aria-label="📼, vhs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📼</span>
									</button>
								</li>
								<li>
									<button aria-label="🔍, mag" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔍</span>
									</button>
								</li>
								<li>
									<button aria-label="🔎, mag_right" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔎</span>
									</button>
								</li>
								<li>
									<button aria-label="🕯️, candle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕯️</span>
									</button>
								</li>
								<li>
									<button aria-label="💡, bulb" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💡</span>
									</button>
								</li>
								<li>
									<button aria-label="🔦, flashlight" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔦</span>
									</button>
								</li>
								<li>
									<button aria-label="🏮, izakaya_lantern, lantern" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏮</span>
									</button>
								</li>
								<li>
									<button aria-label="🪔, diya_lamp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪔</span>
									</button>
								</li>
								<li>
									<button aria-label="📔, notebook_with_decorative_cover" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📔</span>
									</button>
								</li>
								<li>
									<button aria-label="📕, closed_book" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📕</span>
									</button>
								</li>
								<li>
									<button aria-label="📖, book, open_book" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📖</span>
									</button>
								</li>
								<li>
									<button aria-label="📗, green_book" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📗</span>
									</button>
								</li>
								<li>
									<button aria-label="📘, blue_book" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📘</span>
									</button>
								</li>
								<li>
									<button aria-label="📙, orange_book" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📙</span>
									</button>
								</li>
								<li>
									<button aria-label="📚, books" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📚</span>
									</button>
								</li>
								<li>
									<button aria-label="📓, notebook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📓</span>
									</button>
								</li>
								<li>
									<button aria-label="📒, ledger" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📒</span>
									</button>
								</li>
								<li>
									<button aria-label="📃, page_with_curl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📃</span>
									</button>
								</li>
								<li>
									<button aria-label="📜, scroll" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📜</span>
									</button>
								</li>
								<li>
									<button aria-label="📄, page_facing_up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📄</span>
									</button>
								</li>
								<li>
									<button aria-label="📰, newspaper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📰</span>
									</button>
								</li>
								<li>
									<button aria-label="🗞️, rolled_up_newspaper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗞️</span>
									</button>
								</li>
								<li>
									<button aria-label="📑, bookmark_tabs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📑</span>
									</button>
								</li>
								<li>
									<button aria-label="🔖, bookmark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔖</span>
									</button>
								</li>
								<li>
									<button aria-label="🏷️, label" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏷️</span>
									</button>
								</li>
								<li>
									<button aria-label="💰, moneybag" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💰</span>
									</button>
								</li>
								<li>
									<button aria-label="💴, yen" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💴</span>
									</button>
								</li>
								<li>
									<button aria-label="💵, dollar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💵</span>
									</button>
								</li>
								<li>
									<button aria-label="💶, euro" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💶</span>
									</button>
								</li>
								<li>
									<button aria-label="💷, pound" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💷</span>
									</button>
								</li>
								<li>
									<button aria-label="💸, money_with_wings" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💸</span>
									</button>
								</li>
								<li>
									<button aria-label="💳, credit_card" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💳</span>
									</button>
								</li>
								<li>
									<button aria-label="🧾, receipt" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧾</span>
									</button>
								</li>
								<li>
									<button aria-label="💹, chart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💹</span>
									</button>
								</li>
								<li>
									<button aria-label="💱, currency_exchange" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💱</span>
									</button>
								</li>
								<li>
									<button aria-label="💲, heavy_dollar_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💲</span>
									</button>
								</li>
								<li>
									<button aria-label="✉️, email, envelope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✉️</span>
									</button>
								</li>
								<li>
									<button aria-label="📧, e-mail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📧</span>
									</button>
								</li>
								<li>
									<button aria-label="📨, incoming_envelope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📨</span>
									</button>
								</li>
								<li>
									<button aria-label="📩, envelope_with_arrow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📩</span>
									</button>
								</li>
								<li>
									<button aria-label="📤, outbox_tray" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📤</span>
									</button>
								</li>
								<li>
									<button aria-label="📥, inbox_tray" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📥</span>
									</button>
								</li>
								<li>
									<button aria-label="📦, package" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📦</span>
									</button>
								</li>
								<li>
									<button aria-label="📫, mailbox" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📫</span>
									</button>
								</li>
								<li>
									<button aria-label="📪, mailbox_closed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📪</span>
									</button>
								</li>
								<li>
									<button aria-label="📬, mailbox_with_mail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📬</span>
									</button>
								</li>
								<li>
									<button aria-label="📭, mailbox_with_no_mail" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📭</span>
									</button>
								</li>
								<li>
									<button aria-label="📮, postbox" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📮</span>
									</button>
								</li>
								<li>
									<button aria-label="🗳️, ballot_box_with_ballot" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗳️</span>
									</button>
								</li>
								<li>
									<button aria-label="✏️, pencil2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✏️</span>
									</button>
								</li>
								<li>
									<button aria-label="✒️, black_nib" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✒️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖋️, lower_left_fountain_pen" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖋️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖊️, lower_left_ballpoint_pen" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖊️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖌️, lower_left_paintbrush" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖌️</span>
									</button>
								</li>
								<li>
									<button aria-label="🖍️, lower_left_crayon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖍️</span>
									</button>
								</li>
								<li>
									<button aria-label="📝, memo, pencil" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📝</span>
									</button>
								</li>
								<li>
									<button aria-label="💼, briefcase" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💼</span>
									</button>
								</li>
								<li>
									<button aria-label="📁, file_folder" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📁</span>
									</button>
								</li>
								<li>
									<button aria-label="📂, open_file_folder" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📂</span>
									</button>
								</li>
								<li>
									<button aria-label="🗂️, card_index_dividers" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗂️</span>
									</button>
								</li>
								<li>
									<button aria-label="📅, date" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📅</span>
									</button>
								</li>
								<li>
									<button aria-label="📆, calendar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📆</span>
									</button>
								</li>
								<li>
									<button aria-label="🗒️, spiral_note_pad" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗒️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗓️, spiral_calendar_pad" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗓️</span>
									</button>
								</li>
								<li>
									<button aria-label="📇, card_index" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📇</span>
									</button>
								</li>
								<li>
									<button aria-label="📈, chart_with_upwards_trend" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📈</span>
									</button>
								</li>
								<li>
									<button aria-label="📉, chart_with_downwards_trend" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📉</span>
									</button>
								</li>
								<li>
									<button aria-label="📊, bar_chart" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📊</span>
									</button>
								</li>
								<li>
									<button aria-label="📋, clipboard" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📋</span>
									</button>
								</li>
								<li>
									<button aria-label="📌, pushpin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📌</span>
									</button>
								</li>
								<li>
									<button aria-label="📍, round_pushpin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📍</span>
									</button>
								</li>
								<li>
									<button aria-label="📎, paperclip" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📎</span>
									</button>
								</li>
								<li>
									<button aria-label="🖇️, linked_paperclips" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🖇️</span>
									</button>
								</li>
								<li>
									<button aria-label="📏, straight_ruler" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📏</span>
									</button>
								</li>
								<li>
									<button aria-label="📐, triangular_ruler" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📐</span>
									</button>
								</li>
								<li>
									<button aria-label="✂️, scissors" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗃️, card_file_box" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗃️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗄️, file_cabinet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗄️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗑️, wastebasket" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗑️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔒, lock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔒</span>
									</button>
								</li>
								<li>
									<button aria-label="🔓, unlock" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔓</span>
									</button>
								</li>
								<li>
									<button aria-label="🔏, lock_with_ink_pen" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔏</span>
									</button>
								</li>
								<li>
									<button aria-label="🔐, closed_lock_with_key" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔐</span>
									</button>
								</li>
								<li>
									<button aria-label="🔑, key" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔑</span>
									</button>
								</li>
								<li>
									<button aria-label="🗝️, old_key" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗝️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔨, hammer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔨</span>
									</button>
								</li>
								<li>
									<button aria-label="🪓, axe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪓</span>
									</button>
								</li>
								<li>
									<button aria-label="⛏️, pick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛏️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚒️, hammer_and_pick" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚒️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛠️, hammer_and_wrench" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛠️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗡️, dagger_knife" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗡️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚔️, crossed_swords" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚔️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔫, gun" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔫</span>
									</button>
								</li>
								<li>
									<button aria-label="🏹, bow_and_arrow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏹</span>
									</button>
								</li>
								<li>
									<button aria-label="🛡️, shield" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛡️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔧, wrench" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔧</span>
									</button>
								</li>
								<li>
									<button aria-label="🔩, nut_and_bolt" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔩</span>
									</button>
								</li>
								<li>
									<button aria-label="⚙️, gear" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚙️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗜️, compression" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗜️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚖️, scales" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚖️</span>
									</button>
								</li>
								<li>
									<button aria-label="🦯, probing_cane" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🦯</span>
									</button>
								</li>
								<li>
									<button aria-label="🔗, link" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔗</span>
									</button>
								</li>
								<li>
									<button aria-label="⛓️, chains" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛓️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧰, toolbox" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧰</span>
									</button>
								</li>
								<li>
									<button aria-label="🧲, magnet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧲</span>
									</button>
								</li>
								<li>
									<button aria-label="⚗️, alembic" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚗️</span>
									</button>
								</li>
								<li>
									<button aria-label="🧪, test_tube" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧪</span>
									</button>
								</li>
								<li>
									<button aria-label="🧫, petri_dish" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧫</span>
									</button>
								</li>
								<li>
									<button aria-label="🧬, dna" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧬</span>
									</button>
								</li>
								<li>
									<button aria-label="🔬, microscope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔬</span>
									</button>
								</li>
								<li>
									<button aria-label="🔭, telescope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔭</span>
									</button>
								</li>
								<li>
									<button aria-label="📡, satellite_antenna" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📡</span>
									</button>
								</li>
								<li>
									<button aria-label="💉, syringe" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💉</span>
									</button>
								</li>
								<li>
									<button aria-label="🩸, drop_of_blood" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩸</span>
									</button>
								</li>
								<li>
									<button aria-label="💊, pill" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💊</span>
									</button>
								</li>
								<li>
									<button aria-label="🩹, adhesive_bandage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩹</span>
									</button>
								</li>
								<li>
									<button aria-label="🩺, stethoscope" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🩺</span>
									</button>
								</li>
								<li>
									<button aria-label="🚪, door" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚪</span>
									</button>
								</li>
								<li>
									<button aria-label="🛏️, bed" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛏️</span>
									</button>
								</li>
								<li>
									<button aria-label="🛋️, couch_and_lamp" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛋️</span>
									</button>
								</li>
								<li>
									<button aria-label="🪑, chair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪑</span>
									</button>
								</li>
								<li>
									<button aria-label="🚽, toilet" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚽</span>
									</button>
								</li>
								<li>
									<button aria-label="🚿, shower" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚿</span>
									</button>
								</li>
								<li>
									<button aria-label="🛁, bathtub" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛁</span>
									</button>
								</li>
								<li>
									<button aria-label="🪒, razor" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🪒</span>
									</button>
								</li>
								<li>
									<button aria-label="🧴, lotion_bottle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧴</span>
									</button>
								</li>
								<li>
									<button aria-label="🧷, safety_pin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧷</span>
									</button>
								</li>
								<li>
									<button aria-label="🧹, broom" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧹</span>
									</button>
								</li>
								<li>
									<button aria-label="🧺, basket" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧺</span>
									</button>
								</li>
								<li>
									<button aria-label="🧻, roll_of_paper" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧻</span>
									</button>
								</li>
								<li>
									<button aria-label="🧼, soap" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧼</span>
									</button>
								</li>
								<li>
									<button aria-label="🧽, sponge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧽</span>
									</button>
								</li>
								<li>
									<button aria-label="🧯, fire_extinguisher" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🧯</span>
									</button>
								</li>
								<li>
									<button aria-label="🛒, shopping_trolley" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛒</span>
									</button>
								</li>
								<li>
									<button aria-label="🚬, smoking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚬</span>
									</button>
								</li>
								<li>
									<button aria-label="⚰️, coffin" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚰️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚱️, funeral_urn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚱️</span>
									</button>
								</li>
								<li>
									<button aria-label="🗿, moyai" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🗿</span>
									</button>
								</li>
							</ul>
						</section>
						<section class="emoji-mart-category" aria-label="Symbols" style="display: inherit;">
							<div data-name="Symbols" class="emoji-mart-category-label">
								<span aria-hidden="true">Symbols</span>
							</div>
							<ul class="emoji-mart-category-list">
								<li>
									<button aria-label="🏧, atm" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🏧</span>
									</button>
								</li>
								<li>
									<button aria-label="🚮, put_litter_in_its_place" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚮</span>
									</button>
								</li>
								<li>
									<button aria-label="🚰, potable_water" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚰</span>
									</button>
								</li>
								<li>
									<button aria-label="♿, wheelchair" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♿</span>
									</button>
								</li>
								<li>
									<button aria-label="🚹, mens" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚹</span>
									</button>
								</li>
								<li>
									<button aria-label="🚺, womens" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚺</span>
									</button>
								</li>
								<li>
									<button aria-label="🚻, restroom" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚻</span>
									</button>
								</li>
								<li>
									<button aria-label="🚼, baby_symbol" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚼</span>
									</button>
								</li>
								<li>
									<button aria-label="🚾, wc" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚾</span>
									</button>
								</li>
								<li>
									<button aria-label="🛂, passport_control" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛂</span>
									</button>
								</li>
								<li>
									<button aria-label="🛃, customs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛃</span>
									</button>
								</li>
								<li>
									<button aria-label="🛄, baggage_claim" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛄</span>
									</button>
								</li>
								<li>
									<button aria-label="🛅, left_luggage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛅</span>
									</button>
								</li>
								<li>
									<button aria-label="⚠️, warning" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚠️</span>
									</button>
								</li>
								<li>
									<button aria-label="🚸, children_crossing" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚸</span>
									</button>
								</li>
								<li>
									<button aria-label="⛔, no_entry" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛔</span>
									</button>
								</li>
								<li>
									<button aria-label="🚫, no_entry_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚫</span>
									</button>
								</li>
								<li>
									<button aria-label="🚳, no_bicycles" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚳</span>
									</button>
								</li>
								<li>
									<button aria-label="🚭, no_smoking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚭</span>
									</button>
								</li>
								<li>
									<button aria-label="🚯, do_not_litter" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚯</span>
									</button>
								</li>
								<li>
									<button aria-label="🚱, non-potable_water" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚱</span>
									</button>
								</li>
								<li>
									<button aria-label="🚷, no_pedestrians" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🚷</span>
									</button>
								</li>
								<li>
									<button aria-label="📵, no_mobile_phones" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📵</span>
									</button>
								</li>
								<li>
									<button aria-label="🔞, underage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔞</span>
									</button>
								</li>
								<li>
									<button aria-label="☢️, radioactive_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☢️</span>
									</button>
								</li>
								<li>
									<button aria-label="☣️, biohazard_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☣️</span>
									</button>
								</li>
								<li>
									<button aria-label="⬆️, arrow_up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⬆️</span>
									</button>
								</li>
								<li>
									<button aria-label="↗️, arrow_upper_right" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↗️</span>
									</button>
								</li>
								<li>
									<button aria-label="➡️, arrow_right" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➡️</span>
									</button>
								</li>
								<li>
									<button aria-label="↘️, arrow_lower_right" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↘️</span>
									</button>
								</li>
								<li>
									<button aria-label="⬇️, arrow_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⬇️</span>
									</button>
								</li>
								<li>
									<button aria-label="↙️, arrow_lower_left" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↙️</span>
									</button>
								</li>
								<li>
									<button aria-label="⬅️, arrow_left" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⬅️</span>
									</button>
								</li>
								<li>
									<button aria-label="↖️, arrow_upper_left" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↖️</span>
									</button>
								</li>
								<li>
									<button aria-label="↕️, arrow_up_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↕️</span>
									</button>
								</li>
								<li>
									<button aria-label="↔️, left_right_arrow" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↔️</span>
									</button>
								</li>
								<li>
									<button aria-label="↩️, leftwards_arrow_with_hook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↩️</span>
									</button>
								</li>
								<li>
									<button aria-label="↪️, arrow_right_hook" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">↪️</span>
									</button>
								</li>
								<li>
									<button aria-label="⤴️, arrow_heading_up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⤴️</span>
									</button>
								</li>
								<li>
									<button aria-label="⤵️, arrow_heading_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⤵️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔃, arrows_clockwise" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔃</span>
									</button>
								</li>
								<li>
									<button aria-label="🔄, arrows_counterclockwise" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔄</span>
									</button>
								</li>
								<li>
									<button aria-label="🔙, back" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔙</span>
									</button>
								</li>
								<li>
									<button aria-label="🔚, end" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔚</span>
									</button>
								</li>
								<li>
									<button aria-label="🔛, on" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔛</span>
									</button>
								</li>
								<li>
									<button aria-label="🔜, soon" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔜</span>
									</button>
								</li>
								<li>
									<button aria-label="🔝, top" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔝</span>
									</button>
								</li>
								<li>
									<button aria-label="🛐, place_of_worship" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🛐</span>
									</button>
								</li>
								<li>
									<button aria-label="⚛️, atom_symbol" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚛️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕉️, om_symbol" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕉️</span>
									</button>
								</li>
								<li>
									<button aria-label="✡️, star_of_david" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✡️</span>
									</button>
								</li>
								<li>
									<button aria-label="☸️, wheel_of_dharma" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☸️</span>
									</button>
								</li>
								<li>
									<button aria-label="☯️, yin_yang" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☯️</span>
									</button>
								</li>
								<li>
									<button aria-label="✝️, latin_cross" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✝️</span>
									</button>
								</li>
								<li>
									<button aria-label="☦️, orthodox_cross" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☦️</span>
									</button>
								</li>
								<li>
									<button aria-label="☪️, star_and_crescent" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☪️</span>
									</button>
								</li>
								<li>
									<button aria-label="☮️, peace_symbol" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☮️</span>
									</button>
								</li>
								<li>
									<button aria-label="🕎, menorah_with_nine_branches" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🕎</span>
									</button>
								</li>
								<li>
									<button aria-label="🔯, six_pointed_star" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔯</span>
									</button>
								</li>
								<li>
									<button aria-label="♈, aries" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♈</span>
									</button>
								</li>
								<li>
									<button aria-label="♉, taurus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♉</span>
									</button>
								</li>
								<li>
									<button aria-label="♊, gemini" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♊</span>
									</button>
								</li>
								<li>
									<button aria-label="♋, cancer" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♋</span>
									</button>
								</li>
								<li>
									<button aria-label="♌, leo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♌</span>
									</button>
								</li>
								<li>
									<button aria-label="♍, virgo" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♍</span>
									</button>
								</li>
								<li>
									<button aria-label="♎, libra" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♎</span>
									</button>
								</li>
								<li>
									<button aria-label="♏, scorpius" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♏</span>
									</button>
								</li>
								<li>
									<button aria-label="♐, sagittarius" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♐</span>
									</button>
								</li>
								<li>
									<button aria-label="♑, capricorn" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♑</span>
									</button>
								</li>
								<li>
									<button aria-label="♒, aquarius" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♒</span>
									</button>
								</li>
								<li>
									<button aria-label="♓, pisces" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♓</span>
									</button>
								</li>
								<li>
									<button aria-label="⛎, ophiuchus" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⛎</span>
									</button>
								</li>
								<li>
									<button aria-label="🔀, twisted_rightwards_arrows" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔀</span>
									</button>
								</li>
								<li>
									<button aria-label="🔁, repeat" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔁</span>
									</button>
								</li>
								<li>
									<button aria-label="🔂, repeat_one" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔂</span>
									</button>
								</li>
								<li>
									<button aria-label="▶️, arrow_forward" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">▶️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏩, fast_forward" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏩</span>
									</button>
								</li>
								<li>
									<button aria-label="⏭️, black_right_pointing_double_triangle_with_vertical_bar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏭️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏯️, black_right_pointing_triangle_with_double_vertical_bar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏯️</span>
									</button>
								</li>
								<li>
									<button aria-label="◀️, arrow_backward" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">◀️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏪, rewind" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏪</span>
									</button>
								</li>
								<li>
									<button aria-label="⏮️, black_left_pointing_double_triangle_with_vertical_bar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏮️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔼, arrow_up_small" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔼</span>
									</button>
								</li>
								<li>
									<button aria-label="⏫, arrow_double_up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏫</span>
									</button>
								</li>
								<li>
									<button aria-label="🔽, arrow_down_small" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔽</span>
									</button>
								</li>
								<li>
									<button aria-label="⏬, arrow_double_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏬</span>
									</button>
								</li>
								<li>
									<button aria-label="⏸️, double_vertical_bar" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏸️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏹️, black_square_for_stop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏹️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏺️, black_circle_for_record" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏺️</span>
									</button>
								</li>
								<li>
									<button aria-label="⏏️, eject" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⏏️</span>
									</button>
								</li>
								<li>
									<button aria-label="🎦, cinema" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🎦</span>
									</button>
								</li>
								<li>
									<button aria-label="🔅, low_brightness" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔅</span>
									</button>
								</li>
								<li>
									<button aria-label="🔆, high_brightness" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔆</span>
									</button>
								</li>
								<li>
									<button aria-label="📶, signal_strength" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📶</span>
									</button>
								</li>
								<li>
									<button aria-label="📳, vibration_mode" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📳</span>
									</button>
								</li>
								<li>
									<button aria-label="📴, mobile_phone_off" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📴</span>
									</button>
								</li>
								<li>
									<button aria-label="♀️, female_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♀️</span>
									</button>
								</li>
								<li>
									<button aria-label="♂️, male_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♂️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚕️, medical_symbol, staff_of_aesculapius" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚕️</span>
									</button>
								</li>
								<li>
									<button aria-label="♾️, infinity" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♾️</span>
									</button>
								</li>
								<li>
									<button aria-label="♻️, recycle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">♻️</span>
									</button>
								</li>
								<li>
									<button aria-label="⚜️, fleur_de_lis" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚜️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔱, trident" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔱</span>
									</button>
								</li>
								<li>
									<button aria-label="📛, name_badge" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">📛</span>
									</button>
								</li>
								<li>
									<button aria-label="🔰, beginner" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔰</span>
									</button>
								</li>
								<li>
									<button aria-label="⭕, o" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⭕</span>
									</button>
								</li>
								<li>
									<button aria-label="✅, white_check_mark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✅</span>
									</button>
								</li>
								<li>
									<button aria-label="☑️, ballot_box_with_check" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">☑️</span>
									</button>
								</li>
								<li>
									<button aria-label="✔️, heavy_check_mark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✔️</span>
									</button>
								</li>
								<li>
									<button aria-label="✖️, heavy_multiplication_x" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✖️</span>
									</button>
								</li>
								<li>
									<button aria-label="❌, x" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❌</span>
									</button>
								</li>
								<li>
									<button aria-label="❎, negative_squared_cross_mark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❎</span>
									</button>
								</li>
								<li>
									<button aria-label="➕, heavy_plus_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➕</span>
									</button>
								</li>
								<li>
									<button aria-label="➖, heavy_minus_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➖</span>
									</button>
								</li>
								<li>
									<button aria-label="➗, heavy_division_sign" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➗</span>
									</button>
								</li>
								<li>
									<button aria-label="➰, curly_loop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➰</span>
									</button>
								</li>
								<li>
									<button aria-label="➿, loop" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">➿</span>
									</button>
								</li>
								<li>
									<button aria-label="〽️, part_alternation_mark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">〽️</span>
									</button>
								</li>
								<li>
									<button aria-label="✳️, eight_spoked_asterisk" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✳️</span>
									</button>
								</li>
								<li>
									<button aria-label="✴️, eight_pointed_black_star" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">✴️</span>
									</button>
								</li>
								<li>
									<button aria-label="❇️, sparkle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❇️</span>
									</button>
								</li>
								<li>
									<button aria-label="‼️, bangbang" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">‼️</span>
									</button>
								</li>
								<li>
									<button aria-label="⁉️, interrobang" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⁉️</span>
									</button>
								</li>
								<li>
									<button aria-label="❓, question" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❓</span>
									</button>
								</li>
								<li>
									<button aria-label="❔, grey_question" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❔</span>
									</button>
								</li>
								<li>
									<button aria-label="❕, grey_exclamation" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❕</span>
									</button>
								</li>
								<li>
									<button aria-label="❗, exclamation, heavy_exclamation_mark" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">❗</span>
									</button>
								</li>
								<li>
									<button aria-label="〰️, wavy_dash" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">〰️</span>
									</button>
								</li>
								<li>
									<button aria-label="©️, copyright" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">©️</span>
									</button>
								</li>
								<li>
									<button aria-label="®️, registered" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">®️</span>
									</button>
								</li>
								<li>
									<button aria-label="™️, tm" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">™️</span>
									</button>
								</li>
								<li>
									<button aria-label="#️⃣, hash" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">#️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="*️⃣, keycap_star" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">*️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="0️⃣, zero" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">0️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="1️⃣, one" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">1️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="2️⃣, two" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">2️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="3️⃣, three" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">3️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="4️⃣, four" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">4️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="5️⃣, five" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">5️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="6️⃣, six" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">6️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="7️⃣, seven" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">7️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="8️⃣, eight" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">8️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="9️⃣, nine" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">9️⃣</span>
									</button>
								</li>
								<li>
									<button aria-label="🔟, keycap_ten" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔟</span>
									</button>
								</li>
								<li>
									<button aria-label="🔠, capital_abcd" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔠</span>
									</button>
								</li>
								<li>
									<button aria-label="🔡, abcd" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔡</span>
									</button>
								</li>
								<li>
									<button aria-label="🔢, 1234" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔢</span>
									</button>
								</li>
								<li>
									<button aria-label="🔣, symbols" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔣</span>
									</button>
								</li>
								<li>
									<button aria-label="🔤, abc" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔤</span>
									</button>
								</li>
								<li>
									<button aria-label="🅰️, a" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🅰️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆎, ab" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆎</span>
									</button>
								</li>
								<li>
									<button aria-label="🅱️, b" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🅱️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆑, cl" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆑</span>
									</button>
								</li>
								<li>
									<button aria-label="🆒, cool" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆒</span>
									</button>
								</li>
								<li>
									<button aria-label="🆓, free" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆓</span>
									</button>
								</li>
								<li>
									<button aria-label="ℹ️, information_source" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">ℹ️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆔, id" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆔</span>
									</button>
								</li>
								<li>
									<button aria-label="Ⓜ️, m" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">Ⓜ️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆕, new" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆕</span>
									</button>
								</li>
								<li>
									<button aria-label="🆖, ng" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆖</span>
									</button>
								</li>
								<li>
									<button aria-label="🅾️, o2" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🅾️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆗, ok" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆗</span>
									</button>
								</li>
								<li>
									<button aria-label="🅿️, parking" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🅿️</span>
									</button>
								</li>
								<li>
									<button aria-label="🆘, sos" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆘</span>
									</button>
								</li>
								<li>
									<button aria-label="🆙, up" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆙</span>
									</button>
								</li>
								<li>
									<button aria-label="🆚, vs" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🆚</span>
									</button>
								</li>
								<li>
									<button aria-label="🈁, koko" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈁</span>
									</button>
								</li>
								<li>
									<button aria-label="🈂️, sa" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈂️</span>
									</button>
								</li>
								<li>
									<button aria-label="🈷️, u6708" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈷️</span>
									</button>
								</li>
								<li>
									<button aria-label="🈶, u6709" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈶</span>
									</button>
								</li>
								<li>
									<button aria-label="🈯, u6307" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈯</span>
									</button>
								</li>
								<li>
									<button aria-label="🉐, ideograph_advantage" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🉐</span>
									</button>
								</li>
								<li>
									<button aria-label="🈹, u5272" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈹</span>
									</button>
								</li>
								<li>
									<button aria-label="🈚, u7121" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈚</span>
									</button>
								</li>
								<li>
									<button aria-label="🈲, u7981" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈲</span>
									</button>
								</li>
								<li>
									<button aria-label="🉑, accept" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🉑</span>
									</button>
								</li>
								<li>
									<button aria-label="🈸, u7533" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈸</span>
									</button>
								</li>
								<li>
									<button aria-label="🈴, u5408" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈴</span>
									</button>
								</li>
								<li>
									<button aria-label="🈳, u7a7a" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈳</span>
									</button>
								</li>
								<li>
									<button aria-label="㊗️, congratulations" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">㊗️</span>
									</button>
								</li>
								<li>
									<button aria-label="㊙️, secret" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">㊙️</span>
									</button>
								</li>
								<li>
									<button aria-label="🈺, u55b6" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈺</span>
									</button>
								</li>
								<li>
									<button aria-label="🈵, u6e80" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🈵</span>
									</button>
								</li>
								<li>
									<button aria-label="🔴, red_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔴</span>
									</button>
								</li>
								<li>
									<button aria-label="🟠, large_orange_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟠</span>
									</button>
								</li>
								<li>
									<button aria-label="🟡, large_yellow_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟡</span>
									</button>
								</li>
								<li>
									<button aria-label="🟢, large_green_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟢</span>
									</button>
								</li>
								<li>
									<button aria-label="🔵, large_blue_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔵</span>
									</button>
								</li>
								<li>
									<button aria-label="🟣, large_purple_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟣</span>
									</button>
								</li>
								<li>
									<button aria-label="🟤, large_brown_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟤</span>
									</button>
								</li>
								<li>
									<button aria-label="⚫, black_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚫</span>
									</button>
								</li>
								<li>
									<button aria-label="⚪, white_circle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⚪</span>
									</button>
								</li>
								<li>
									<button aria-label="🟥, large_red_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟥</span>
									</button>
								</li>
								<li>
									<button aria-label="🟧, large_orange_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟧</span>
									</button>
								</li>
								<li>
									<button aria-label="🟨, large_yellow_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟨</span>
									</button>
								</li>
								<li>
									<button aria-label="🟩, large_green_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟩</span>
									</button>
								</li>
								<li>
									<button aria-label="🟦, large_blue_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟦</span>
									</button>
								</li>
								<li>
									<button aria-label="🟪, large_purple_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟪</span>
									</button>
								</li>
								<li>
									<button aria-label="🟫, large_brown_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🟫</span>
									</button>
								</li>
								<li>
									<button aria-label="⬛, black_large_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⬛</span>
									</button>
								</li>
								<li>
									<button aria-label="⬜, white_large_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">⬜</span>
									</button>
								</li>
								<li>
									<button aria-label="◼️, black_medium_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">◼️</span>
									</button>
								</li>
								<li>
									<button aria-label="◻️, white_medium_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">◻️</span>
									</button>
								</li>
								<li>
									<button aria-label="◾, black_medium_small_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">◾</span>
									</button>
								</li>
								<li>
									<button aria-label="◽, white_medium_small_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">◽</span>
									</button>
								</li>
								<li>
									<button aria-label="▪️, black_small_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">▪️</span>
									</button>
								</li>
								<li>
									<button aria-label="▫️, white_small_square" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">▫️</span>
									</button>
								</li>
								<li>
									<button aria-label="🔶, large_orange_diamond" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔶</span>
									</button>
								</li>
								<li>
									<button aria-label="🔷, large_blue_diamond" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔷</span>
									</button>
								</li>
								<li>
									<button aria-label="🔸, small_orange_diamond" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔸</span>
									</button>
								</li>
								<li>
									<button aria-label="🔹, small_blue_diamond" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔹</span>
									</button>
								</li>
								<li>
									<button aria-label="🔺, small_red_triangle" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔺</span>
									</button>
								</li>
								<li>
									<button aria-label="🔻, small_red_triangle_down" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔻</span>
									</button>
								</li>
								<li>
									<button aria-label="💠, diamond_shape_with_a_dot_inside" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">💠</span>
									</button>
								</li>
								<li>
									<button aria-label="🔘, radio_button" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔘</span>
									</button>
								</li>
								<li>
									<button aria-label="🔳, white_square_button" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔳</span>
									</button>
								</li>
								<li>
									<button aria-label="🔲, black_square_button" class="emoji-mart-emoji emoji-mart-emoji-native">
										<span class="emoji-btn" style="font-size: 24px; display: inline-block; width: 24px; height: 24px; word-break: keep-all;">🔲</span>
									</button>
								</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		<div>
	`;

	var emojiPopup = document.querySelector('#emojiPopup');

	if (emojiPopup === null) {
		importTarget.insertAdjacentHTML('beforebegin',html);
		htmlEl.addEventListener('click',activeFnc);
		var scrollTarget = document.querySelector('.emoji-mart.emoji-mart-dark');
		scrollTarget.addEventListener('scroll',scrollEvent);
	} else {
		if(emojiPopup.style.display === 'block') {
			emojiPopup.style.display = 'none';
		}else {
			emojiPopup.style.display = 'block';
		}
	}
	function activeFnc(e) {
		var activeCell = document.querySelector('.cell-input.editable');
		var inputText = '';
		if(e.target.className === 'emoji-btn') {
			let sel = window.getSelection();
			let offset = sel.focusOffset;
			let focus = sel.focusNode;

			let firstText = focus.textContent.slice(0,offset);
			let lastText = focus.textContent.slice(offset);

			focus.textContent = firstText + e.target.innerText + lastText;

			let range = document.createRange();
			range.selectNode(focus);
			range.setStart(focus, offset + e.target.innerText.length);

			range.collapse(true);
			sel.removeAllRanges();
			sel.addRange(range);
		}

		if(!e.target.parentElement.classList.contains('emoji-mart-anchors')) return;
		clickScrollEvent(e.target.ariaLabel)
	}
	function scrollEvent(e) {
		var scrollTop = e.target.scrollTop;
		var getSPTop = document.querySelector('[data-name="Smileys & People"]').parentElement.offsetTop-46;
		var getANTop = document.querySelector('[data-name="Animals & Nature"]').parentElement.offsetTop-46;
		var getFDTop = document.querySelector('[data-name="Food & Drink"]').parentElement.offsetTop-46;
		var getACTop = document.querySelector('[data-name="Activity"]').parentElement.offsetTop-46;
		var getTPTop = document.querySelector('[data-name="Travel & Places"]').parentElement.offsetTop-46;
		var getOBTop = document.querySelector('[data-name="Objects"]').parentElement.offsetTop-46;
		var getSBTop = document.querySelector('[data-name="Symbols"]').parentElement.offsetTop-46;

		if (scrollTop < getANTop) {
			changeColor('Smileys & People');
		} else if ((getANTop <= scrollTop) && (scrollTop < getFDTop)) {
			changeColor('Animals & Nature');
		} else if ((getFDTop <= scrollTop) && (scrollTop < getACTop)) {
			changeColor('Food & Drink');
		} else if ((getACTop <= scrollTop) && (scrollTop < getTPTop)) {
			changeColor('Activity');
		} else if ((getTPTop <= scrollTop) && (scrollTop < getOBTop)) {
			changeColor('Travel & Places');
		} else if (getOBTop <= scrollTop && scrollTop < getSBTop) {
			changeColor('Objects');
		} else {
			changeColor('Symbols');
		}
	}

	function changeColor(target) {
		var buttonList = document.querySelectorAll('.emoji-select-area .emoji-mart-anchors [aria-label]');
		var button = document.querySelector(`.emoji-select-area .emoji-mart-anchors [aria-label="${target}"]`);
		buttonList.forEach(function(item){
			item.classList.remove('emoji-mart-anchor-selected');
		})
		button.classList.add('emoji-mart-anchor-selected');
	}

	function clickScrollEvent(target) {
		var targetTop = document.querySelector(`[data-name="${target}"]`).parentElement.offsetTop-46;
		var element = document.querySelector('.emoji-mart.emoji-mart-dark');
		element.scrollTop = targetTop;
	}
}

document.addEventListener("DOMContentLoaded", function () {
    let likeCount = localStorage.getItem("likeCount") || 49;
    document.querySelectorAll(".likeCount").forEach(el => el.textContent = likeCount);

    document.querySelectorAll(".likeBtn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            likeCount++;
            document.querySelectorAll(".likeCount").forEach(el => el.textContent = likeCount);
            localStorage.setItem("likeCount", likeCount);
        });
    });

    document.querySelectorAll(".shareBtn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const currentURL = window.location.href;

            const socialLinks = {
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`,
                twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}`,
                linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentURL)}`
            };

            // Remove any existing share-options
            document.querySelectorAll("#share-options").forEach(el => el.remove());

            // Create and insert share-options
            const shareOptions = document.createElement("div");
            shareOptions.id = "share-options";
            shareOptions.style.position = "absolute";
            shareOptions.style.background = "white";
            shareOptions.style.padding = "10px";
            shareOptions.style.border = "1px solid #ddd";
            shareOptions.innerHTML = `
                <a href="${socialLinks.facebook}" target="_blank" style="margin-right: 10px;">
                    <i class="icon-facebook"></i>
                </a>
                <a href="${socialLinks.twitter}" target="_blank" style="margin-right: 10px;">
                    <i class="icon-twitter"></i>
                </a>
                <a href="${socialLinks.linkedin}" target="_blank">
                    <i class="icon-linkedin"></i>
                </a>
            `;

            button.insertAdjacentElement("afterend", shareOptions);
        });
    });
});
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playList = $('.playList');
const cd = $('.cd');
const player = $('.player');
const btnPlay = $('.btn-toggle-play');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const progress = $('#progress');
const cdThumb = $('.cd-thumb');
const btnRan = $('.btn-random');
const btnRep = $('.btn-repeat');


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    currentVolume: 1,
    songs: [
        {
            name: "Last night",
            singer: "Hazel",
            path:
                "./songs/y2mate.com - Last Night  Animated Video Lyrics.mp3",
            image: "https://i.ytimg.com/vi/64JksYSh4q0/maxresdefault.jpg"
        },
        {
            name: "Chắc là say rồi",
            singer: "24kright",
            path: "./songs/y2mate.com - CHẮC LÀ SAY ÒI.mp3",
            image:
            "https://avatar-ex-swe.nixcdn.com/song/2021/11/26/4/a/f/f/1637913147872_640.jpg"
        },
        {
            name: "Open your eyes",
            singer: "MONO",
            path: "./songs/y2mate.com - MONO  Open Your Eyes Official Music Video.mp3",
            image:
                "https://i.ytimg.com/vi/PjLnZ3T11f4/maxresdefault.jpg"
        },
        {
            name: "Phong long",
            singer: "Low G - Obito",
            path: "./songs/y2mate.com - PHONG LONG  Low G x Obito x WOKEUP  WCAs 2023.mp3",
            image:
                "https://i.ytimg.com/vi/cQXj0uN2ogU/maxresdefault.jpg"
        },
        {
            name: "Show me love",
            singer: "MCK",
            path: "./songs/y2mate.com - MCK  SHOW ME LOVE CHO TÔI THẤY TÌNH YÊU  Prod wondrtime.mp3",
            image:
                "https://i.ytimg.com/vi/IVr1d084nLg/maxresdefault.jpg"
        },
        {
            name: "Sinh nhật của xinh nhất",
            singer: "24K Right",
            path: "./songs/y2mate.com - 24KRIGHT  SINH NHẬT CỦA XINH NHẤT Feat HIEUTHUHAI HIPZ Official Visualizer.mp3",
            image:
                "https://i.ytimg.com/vi/sv71xn_1oRk/maxresdefault.jpg"
        },
        {
            name: "Soda",
            singer: "MCK",
            path: "./songs/y2mate.com - SODA  MCK prodGC.mp3",
            image:
                "https://i.ytimg.com/vi/kJw-XWgfPm8/0.jpg"
        },
        {
            name: "Chỉ 1 đêm nữa thôi",
            singer: "MCK",
            path: "./songs/y2mate.com - 06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh    99  the album.mp3",
            image:
                "https://i.ytimg.com/vi/5WkwBKu1le0/0.jpg"
        },
        {
            name: "Dám rực rỡ",
            singer: "GREY D x HIEUTHUHAI x Wren Evans x Obito ",
            path: "./songs/y2mate.com - Dám Rực Rỡ  GREY D x HIEUTHUHAI x Wren Evans x Obito  Prod by 2pillz  Kai Đinh  WCAs 2023.mp3",
            image:
                "https://i.ytimg.com/vi/cFfuy_2wsz4/0.jpg"
        },
        {
            name: "Call me on my phone 2",
            singer: "Snowz",
            path: "./songs/y2mate.com - Call Me On My Phone 2 feat puppy Wheelie  SpideyBoy.mp3",
            image:
                "https://i.ytimg.com/vi/QrpOPQ6ZXt8/0.jpg"
        },
        {
            name: "Mưa đang rơi",
            singer: "MCK",
            path: "./songs/y2mate.com - Mưa đang rơi  BABY MOKE ft MCK.mp3",
            image:
                "https://i.ytimg.com/vi/D5Wm4biVqkc/0.jpg"
        },
        {
            name: "Va vào giai điệu này",
            singer: "MCK",
            path: "./songs/y2mate.com - 04 Va Vào Giai Điệu Này  RPT MCK  99 the album.mp3",
            image:
                "https://i.ytimg.com/vi/M7UlJ0m-yy4/0.jpg"
        },
        {
            name: "Chương 2 của tương lai",
            singer: "WEAN x MCK x TENKITSUNE",
            path: "./songs/y2mate.com - CHƯƠNG 2 CỦA TƯƠNG LAI  WEAN x MCK x TENKITSUNE.mp3",
            image:
                "https://i.ytimg.com/vi/VIjuCzNI0rQ/0.jpg"
        },
        {
            name: "Cold don't",
            singer: "Nmọc ft. Dmean x Astac",
            path: "./songs/y2mate.com - Cold Dont  Nmọc ft Dmean x Astac  Official Lyrics Video   Prodby Meocamtu .mp3",
            image:
                "https://i.ytimg.com/vi/plRWjecAwZk/0.jpg"
        },
        {
            name: "Just ink hình xăm lên đi ",
            singer: "LJ",
            path: "./songs/y2mate.com - LJ  Just Ink Hình Xăm Lên Đi  Official MV.mp3",
            image:
                "https://i.ytimg.com/vi/RmR5Q9TZKvM/0.jpg"
        },
        {
            name: "Dân chơi sao phải khóc",
            singer: "Andree Right Hand - Rhyder",
            path: "./songs/y2mate.com - Dân Chơi Sao Phải Khóc.mp3",
            image:
                "https://i.ytimg.com/vi/9zeE-ScuVNg/0.jpg"
        },
        {
            name: "Chịu cách mình nói thua",
            singer: "RHYDER ft COOLKID",
            path: "./songs/y2mate.com - RHYDER  CHỊU CÁCH MÌNH NÓI THUA  ft BAN x COOLKID  OFFICIAL MUSIC VIDEO.mp3",
            image:
                "https://i.ytimg.com/vi/dm5-tn1Rug0/0.jpg"
        },
        {
            name: "Tại vì sao",
            singer: "MCK",
            path: "./songs/y2mate.com - RPT MCK  TẠI VÌ SAO  Official Music Video.mp3",
            image:
                "https://i.ytimg.com/vi/U0Vr1zotKIo/0.jpg"
        },
        {
            name: "Nghe như tình yêu",
            singer: "MCK",
            path: "./songs/y2mate.com - Nghe như tình yêu  MCK remixx prod By Kewtiie.mp3",
            image:
                "https://i.ytimg.com/vi/L_z9YHX5ous/0.jpg"
        },
        {
            name: "TGSN",
            singer: "Tlinh - RZ Mas",
            path: "./songs/y2mate.com - TGSN  Siren feat Tlinh  RZ Mas  Official Music Video.mp3",
            image:
                "https://i.ytimg.com/vi/_akC0MOxdV0/0.jpg"
        }
    ],
    renderPlayList: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div data-index="${index}" class="song ${(this.currentIndex == index) ? 'active' : ''}">
                <div class="thumb" style="background-image: url(${song.image})"></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option" data-index="${index}">
                    <i class="fas fa-ellipsis-h"></i>
                    <div class="setting" data-index="${index}">
                        <i class="fa-solid fa-volume-high fa-xs"></i>
                        <input data-index="${index}" type="range" class="volume" name="" id="" value="${this.currentVolume}" step="0.01" min="0" max="1">
                    </div>
                </div>
            </div>
            `;
        }).join("");
        playList.innerHTML = htmls;
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 300);
    },
    loadCurrentSong: function() {
        const curSong = this.songs[this.currentIndex];
        const heading = $('header h2');
        const audio = $('#audio');

        progress.value = 0;
        heading.innerText = curSong.name;
        cdThumb.style.backgroundImage = `url('${curSong.image}')`;
        audio.volume = this.currentVolume;
        audio.src = curSong.path;
    },
    nextSong: function() {
        if(this.isRandom) {
            this.randomSong();
        }
        else if(this.isRepeat) {
            audio.play();
        } 
        else {
            this.currentIndex++;
            if(this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
        }
        this.loadCurrentSong();
        this.renderPlayList();
    },
    prevSong: function() {
        if(this.isRandom) {
            this.randomSong();
        }
        else if(this.isRepeat) {
            audio.play();
        } 
        else {
            this.currentIndex--;
            if(this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1;
            }
        }
        this.loadCurrentSong();
        this.renderPlayList();
        
    },
    randomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(this.currentIndex == newIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();

    },
    showVolume: function(index) {
        const settings = $$('.setting');
        settings.forEach(setting => {
            if(setting.dataset.index == index) {
                setting.style.display = 'flex';
            }
        });
        
    
    },
    hideVolume: function(index) {
        const settings = $$('.setting');
        settings.forEach(setting => {
            setting.style.display = 'none';
        });
    
    },
    handleEvent: function() {
        // roll cd
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // click next
        btnNext.addEventListener('click', function() {
            app.nextSong();
            audio.play();
            app.scrollToActiveSong();

        })

        // click prev
        btnPrev.addEventListener('click', function() {
            app.prevSong();
            audio.play();
            app.scrollToActiveSong();

        })

        // Scale CD
        const cdWidth = cd.offsetWidth;
        document.addEventListener('scroll', function() {
            const newCdWidth = cdWidth - (window.scrollY || document.documentElement.scrollTop);
            cd.style.width = ((newCdWidth > 0) ? newCdWidth : 0) + 'px';
            cd.style.opacity = newCdWidth / cdWidth;
        })

        // click play 
        btnPlay.addEventListener('click', function() {
            if(app.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            
        })

        // audio played
        audio.addEventListener('play', function() {
            audio.volume = app.currentVolume;
            player.classList.add('playing');
            app.isPlaying = true;
            cdThumbAnimate.play();
        })

        // audio paused
        audio.addEventListener('pause', function() {
            player.classList.remove('playing');
            app.isPlaying = false;
            cdThumbAnimate.pause();

        })

        // update time song
        audio.addEventListener('timeupdate', function() {
            if(audio.duration) {
                progress.value = audio.currentTime / audio.duration * 100; 
            }
        })

        // seek song
        progress.addEventListener('input', function(e) {
            audio.currentTime = audio.duration / 100 * e.target.value;
        });

        // Random song
        btnRan.addEventListener('click', function() {
            app.isRandom = !app.isRandom;
            this.classList.toggle('active');
        })

        // Repeat song
        btnRep.addEventListener('click', function() {
            app.isRepeat = !app.isRepeat;
            this.classList.toggle('active');
        })

        // end song
        audio.addEventListener('ended', function() {
            if(app.isRepeat) audio.play();
            else btnNext.click();
        })

        // click song in playlist
        playList.addEventListener('click', function(e) {
            if(e.target.closest('.option') && e.target.closest('.song.active')) {
                app.showVolume(e.target.closest('.option').dataset.index);

                // chang volume
                const volumes = document.querySelectorAll('.volume');
                volumes.forEach(volume => {
                    if(volume.dataset.index == e.target.closest('.option').dataset.index) {
                        audio.volume = Number(volume.value);
                        app.currentVolume = Number(volume.value);
                        
                        volume.addEventListener('input', function(e) {
                            audio.volume = Number(e.target.value);
                            app.currentVolume = Number(e.target.value);
                        });
                    }
                });

            } else {
                app.hideVolume();
                if(e.target.closest('.song:not(.active)') && !e.target.closest('.option')) {
                    const indexSong = e.target.closest('.song').dataset.index;
                    app.currentIndex = indexSong;
                    app.loadCurrentSong();
                    app.renderPlayList();
                    audio.play();
                }
            }   

            
        })

    },
    start: function() {
        this.loadCurrentSong();
        this.handleEvent();
        this.renderPlayList();
    }
}
app.start()

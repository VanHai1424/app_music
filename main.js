const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
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
    songs: [
        {
            name: "2002",
            singer: "AnneMarie",
            path: "./songs/y2mate.com - AnneMarie  2002 Official Video.mp3",
            image:
                "https://home.voca.vn/assets/img/upload/images/Loi-dich-bai-hat-2002.jpg"
        },
        {
            name: "Cơm áo gạo tiền",
            singer: "7dnight",
            path: "./songs/y2mate.com - 7dnight  Cơm Áo Gạo Tiền Official Video.mp3",
            image: "https://i.ytimg.com/vi/0HeFKcZzvr0/maxresdefault.jpg"
        },
        {
            name: "Chắc là say òi",
            singer: "24kright",
            path: "./songs/y2mate.com - CHẮC LÀ SAY ÒI.mp3",
            image:
            "https://avatar-ex-swe.nixcdn.com/song/2021/11/26/4/a/f/f/1637913147872_640.jpg"
        },
        {
            name: "Last night",
            singer: "Hazel",
            path:
                "./songs/y2mate.com - Last Night  Animated Video Lyrics.mp3",
            image: "https://i.ytimg.com/vi/64JksYSh4q0/maxresdefault.jpg"
        },
        {
            name: "Tip Toe",
            singer: "HYBS",
            path: "./songs/y2mate.com - HYBS  Tip Toe speed up.mp3",
            image:
                "https://i.ytimg.com/vi/nNA9ru2Ox5o/maxresdefault.jpg"
        },
        {
            name: "At my worst",
            singer: "Pink sweat",
            path:
                "./songs/y2mate.com - Pink Sweat  At My Worst Official Video.mp3",
            image:
                "https://avatar-ex-swe.nixcdn.com/song/2020/09/15/3/7/8/3/1600184151280_640.jpg"
        },
        {
            name: "Hello VietNam",
            singer: "Pham Quynh Anh",
            path: "./songs/y2mate.com - Hello Viet NamPham Quynh Anh HDLyricsHD Kara  Vietsub.mp3",
            image:
                "https://i.ytimg.com/vi/NCPCoAtCqfc/maxresdefault.jpg"
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
            name: "Sinh nhat cua sinh nhat",
            singer: "24K Right",
            path: "./songs/y2mate.com - 24KRIGHT  SINH NHẬT CỦA XINH NHẤT Feat HIEUTHUHAI HIPZ Official Visualizer.mp3",
            image:
                "https://i.ytimg.com/vi/sv71xn_1oRk/maxresdefault.jpg"
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
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `;
        }).join("");

        playList.innerHTML = htmls;
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            const arr = [0, 1, 2];
            const optionBlock = arr.includes(this.currentIndex) ? 'center' : 'nearest';
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: optionBlock
            })
        }, 300);
    },
    loadCurrentSong: function() {
        const curSong = this.songs[this.currentIndex];
        const heading = $('header h2');
        const audio = $('#audio');

        heading.innerText = curSong.name;
        cdThumb.style.backgroundImage = `url('${curSong.image}')`;
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
            if(!e.target.closest('.option') && e.target.closest('.song:not(.active)')) {
                const indexSong = e.target.closest('.song').dataset.index;
                app.currentIndex = indexSong;
                app.loadCurrentSong();
                app.renderPlayList();
                audio.play();
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
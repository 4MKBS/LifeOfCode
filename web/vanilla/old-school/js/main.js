
        // Floating memories animation
        const floatingEmojis = ['📚', '✏️', '🎒', '⚽', '🌸', '🦋', '🌟', '💫', '🏏', '🎯', '🌾', '🌺', '🦜', '🌙', '🎪', '🥞', '🏡', '🕌', '🎭', '🎨', '🎵', '🌈', '☀️', '🌧️', '❄️', '🍃'];
        const floatingContainer = document.getElementById('floatingMemories');

        function createFloatingMemory() {
            const memory = document.createElement('div');
            memory.className = 'floating-memory';
            memory.textContent = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
            memory.style.left = Math.random() * window.innerWidth + 'px';
            memory.style.top = window.innerHeight + 'px';
            memory.style.animationDuration = (Math.random() * 3 + 4) + 's';
            memory.style.animationDelay = Math.random() * 2 + 's';
            floatingContainer.appendChild(memory);
            setTimeout(() => {
                memory.remove();
            }, 8000);
        }
        
        // Create floating memories periodically
        setInterval(createFloatingMemory, 1000);

        // Scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        function showMemory(location) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = memoryStories[location];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';

            // Add entrance animation
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showGameMemory(game) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = gameStories[game];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #ff69b4;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showSeasonMemory(season) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = seasonStories[season];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #4facfe;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showFestivalMemory(festival) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = festivalStories[festival];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #ffd700;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showNatureMemory(nature) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = natureStories[nature];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #32cd32;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showDailyMemory(time) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = dailyStories[time];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #ffa500;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showFoodMemory(food) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = foodStories[food];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #ff8c00;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showCommunityMemory(community) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = communityStories[community];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #0080ff;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showCraftMemory(craft) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = craftStories[craft];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #8b4513;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showMusicMemory(music) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = musicStories[music];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #9300d3;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function showTransportMemory(transport) {
            const modal = document.getElementById('memoryModal');
            const content = document.getElementById('modalContent');
            const story = transportStories[transport];

            content.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: #228b22;">${story.title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${story.content}</p>
            `;

            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        // Generic modal function
        function showModal(title, content, color = '#ffffff') {
            const modal = document.getElementById('memoryModal');
            const modalContent = document.getElementById('modalContent');
            
            modalContent.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: ${color};">${title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${content}</p>
            `;
            
            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        // Generic modal function
        function showModal(title, content, color = '#ffffff') {
            const modal = document.getElementById('memoryModal');
            const modalContent = document.getElementById('modalContent');
            
            modalContent.innerHTML = `
                <h3 class="bengali-text" style="margin-bottom: 1rem; font-size: 1.5rem; color: ${color};">${title}</h3>
                <p class="bengali-text" style="line-height: 1.8; font-size: 1.1rem;">${content}</p>
            `;
            
            modal.style.display = 'block';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '1';
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('memoryModal');
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        // Close modal when clicking outside
        document.getElementById('memoryModal').addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Memory functions for new sections
        function showOccupationMemory(occupation) {
            const story = occupationStories[occupation];
            showModal(story.title, story.content);
        }

        function showBeliefMemory(belief) {
            const story = beliefStories[belief];
            showModal(story.title, story.content);
        }

        function showLanguageMemory(language) {
            const story = languageStories[language];
            showModal(story.title, story.content);
        }

        function showCeremonyMemory(ceremony) {
            const story = ceremonyStories[ceremony];
            showModal(story.title, story.content);
        }

        function showHealthcareMemory(healthcare) {
            const story = healthcareStories[healthcare];
            showModal(story.title, story.content);
        }

        function showReligiousMemory(religious) {
            const story = religiousStories[religious];
            playClickSound();
            showModal(story.title, story.content);
        }

        // Enhanced memory functions with sound and effects
        function showOccupationMemoryEnhanced(occupation) {
            playClickSound();
            createParticleEffect(event.target);
            showOccupationMemory(occupation);
        }

        function showBeliefMemoryEnhanced(belief) {
            playClickSound();
            createMysticalEffect(event.target);
            showBeliefMemory(belief);
        }

        function showLanguageMemoryEnhanced(language) {
            playClickSound();
            createTextEffect(event.target);
            showLanguageMemory(language);
        }

        function showCeremonyMemoryEnhanced(ceremony) {
            playClickSound();
            createCelebrationEffect(event.target);
            showCeremonyMemory(ceremony);
        }

        function showHealthcareMemoryEnhanced(healthcare) {
            playClickSound();
            createHealingEffect(event.target);
            showHealthcareMemory(healthcare);
        }

        function showReligiousMemoryEnhanced(religious) {
            playClickSound();
            createSacredEffect(event.target);
            showReligiousMemory(religious);
        }

        // Sound effect function
        function playClickSound() {
            // Create a subtle click sound using Web Audio API
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);

                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                // Fallback - no sound if Web Audio API is not supported
            }
        }

        // Special effects for different cultural sections
        function createParticleEffect(element) {
            const colors = ['#8B4513', '#D2691E', '#CD853F', '#DEB887'];
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.innerHTML = ['🌾', '🏺', '🔨', '⚒️'][Math.floor(Math.random() * 4)];
                    particle.style.position = 'fixed';
                    particle.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    particle.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    particle.style.pointerEvents = 'none';
                    particle.style.fontSize = '1.5rem';
                    particle.style.opacity = '1';
                    particle.style.transform = 'translateY(0) rotate(0deg)';
                    particle.style.transition = 'all 2s ease-out';
                    particle.style.zIndex = '1000';
                    document.body.appendChild(particle);

                    setTimeout(() => {
                        particle.style.transform = 'translateY(-100px) rotate(360deg)';
                        particle.style.opacity = '0';
                    }, 100);

                    setTimeout(() => particle.remove(), 2100);
                }, i * 100);
            }
        }

        function createMysticalEffect(element) {
            const mysticalSymbols = ['✨', '🌙', '⭐', '🔮', '👻'];
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const symbol = document.createElement('div');
                    symbol.innerHTML = mysticalSymbols[Math.floor(Math.random() * mysticalSymbols.length)];
                    symbol.style.position = 'fixed';
                    symbol.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    symbol.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    symbol.style.pointerEvents = 'none';
                    symbol.style.fontSize = '1.8rem';
                    symbol.style.opacity = '1';
                    symbol.style.transform = 'scale(0) rotate(0deg)';
                    symbol.style.transition = 'all 1.5s ease-out';
                    symbol.style.zIndex = '1000';
                    document.body.appendChild(symbol);

                    setTimeout(() => {
                        symbol.style.transform = 'scale(1.5) rotate(720deg)';
                        symbol.style.opacity = '0';
                    }, 100);

                    setTimeout(() => symbol.remove(), 1600);
                }, i * 150);
            }
        }

        function createTextEffect(element) {
            const textSymbols = ['📜', '✍️', '📝', '🗣️', '💭'];
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const text = document.createElement('div');
                    text.innerHTML = textSymbols[Math.floor(Math.random() * textSymbols.length)];
                    text.style.position = 'fixed';
                    text.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    text.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    text.style.pointerEvents = 'none';
                    text.style.fontSize = '2rem';
                    text.style.opacity = '1';
                    text.style.transform = 'translateX(0) scale(1)';
                    text.style.transition = 'all 2s ease-out';
                    text.style.zIndex = '1000';
                    document.body.appendChild(text);

                    setTimeout(() => {
                        text.style.transform = 'translateX(' + (Math.random() > 0.5 ? '100px' : '-100px') + ') scale(0.5)';
                        text.style.opacity = '0';
                    }, 100);

                    setTimeout(() => text.remove(), 2100);
                }, i * 200);
            }
        }

        function createCelebrationEffect(element) {
            const celebrationSymbols = ['🎉', '💐', '🌸', '🎊', '💒'];
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const celebration = document.createElement('div');
                    celebration.innerHTML = celebrationSymbols[Math.floor(Math.random() * celebrationSymbols.length)];
                    celebration.style.position = 'fixed';
                    celebration.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    celebration.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    celebration.style.pointerEvents = 'none';
                    celebration.style.fontSize = '1.5rem';
                    celebration.style.opacity = '1';
                    celebration.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                    celebration.style.transition = 'all 1.8s ease-out';
                    celebration.style.zIndex = '1000';
                    document.body.appendChild(celebration);

                    setTimeout(() => {
                        celebration.style.transform = 'translateY(-80px) rotate(180deg) scale(0.3)';
                        celebration.style.opacity = '0';
                    }, 100);

                    setTimeout(() => celebration.remove(), 1900);
                }, i * 80);
            }
        }

        function createHealingEffect(element) {
            const healingSymbols = ['🌿', '🍃', '💊', '🌱', '🌺'];
            for (let i = 0; i < 7; i++) {
                setTimeout(() => {
                    const healing = document.createElement('div');
                    healing.innerHTML = healingSymbols[Math.floor(Math.random() * healingSymbols.length)];
                    healing.style.position = 'fixed';
                    healing.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    healing.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    healing.style.pointerEvents = 'none';
                    healing.style.fontSize = '1.6rem';
                    healing.style.opacity = '1';
                    healing.style.transform = 'translateY(0) scale(0.8)';
                    healing.style.transition = 'all 2.2s ease-out';
                    healing.style.zIndex = '1000';
                    healing.style.filter = 'drop-shadow(0 0 10px rgba(46, 204, 113, 0.6))';
                    document.body.appendChild(healing);

                    setTimeout(() => {
                        healing.style.transform = 'translateY(-120px) scale(1.2)';
                        healing.style.opacity = '0';
                    }, 100);

                    setTimeout(() => healing.remove(), 2300);
                }, i * 120);
            }
        }

        function createSacredEffect(element) {
            const sacredSymbols = ['🕌', '📿', '🌙', '⭐', '🤲'];
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const sacred = document.createElement('div');
                    sacred.innerHTML = sacredSymbols[Math.floor(Math.random() * sacredSymbols.length)];
                    sacred.style.position = 'fixed';
                    sacred.style.left = element.getBoundingClientRect().left + Math.random() * element.offsetWidth + 'px';
                    sacred.style.top = element.getBoundingClientRect().top + Math.random() * element.offsetHeight + 'px';
                    sacred.style.pointerEvents = 'none';
                    sacred.style.fontSize = '1.7rem';
                    sacred.style.opacity = '1';
                    sacred.style.transform = 'rotate(0deg) scale(1)';
                    sacred.style.transition = 'all 2.5s ease-out';
                    sacred.style.zIndex = '1000';
                    sacred.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))';
                    document.body.appendChild(sacred);

                    setTimeout(() => {
                        sacred.style.transform = 'rotate(360deg) scale(0.5)';
                        sacred.style.opacity = '0';
                    }, 100);

                    setTimeout(() => sacred.remove(), 2600);
                }, i * 180);
            }
        }

        // Add random sparkle effects
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.fontSize = '1rem';
            sparkle.style.zIndex = '999';
            sparkle.style.animation = 'fadeInOut 3s ease-in-out';
            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 3000);
        }

        // Add sparkle animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(style);

        // Create sparkles periodically
        setInterval(createSparkle, 5000);

        // Add parallax effect to background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            document.querySelector('.bg-animation').style.transform = `translateY(${parallax}px)`;
        });

        // Add hover sound effect simulation (visual feedback)
        document.querySelectorAll('.memory-card, .institution-card, .village-element, .game-card, .season-card, .festival-card, .nature-card, .daily-card, .food-card, .community-card, .craft-card, .music-card, .transport-card, .occupation-card, .belief-card, .language-card, .ceremony-card, .healthcare-card, .religious-card').forEach(card => {
            card.addEventListener('mouseenter', function () {
                // Show contextual quotes for new cultural sections
                showContextualQuote(this);
            });

            card.addEventListener('mouseenter', function () {
                this.style.transform = this.style.transform + ' scale(1.02)';
                // Create ripple effect
                createRipple(this);
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = this.style.transform.replace(' scale(1.02)', '');
            });
        });

        // Ripple effect function
        function createRipple(element) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            ripple.style.pointerEvents = 'none';

            element.style.position = 'relative';
            element.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

        // Add ripple animation CSS
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);

        // Show contextual quotes on hover
        function showContextualQuote(element) {
            let quote = '';
            const elementId = element.getAttribute('onclick');

            if (elementId && elementId.includes('showOccupationMemory')) {
                const occupation = elementId.match(/'([^']+)'/)[1];
                quote = occupationQuotes[occupation];
            } else if (elementId && elementId.includes('showBeliefMemory')) {
                const belief = elementId.match(/'([^']+)'/)[1];
                quote = beliefQuotes[belief];
            } else if (elementId && elementId.includes('showLanguageMemory')) {
                const language = elementId.match(/'([^']+)'/)[1];
                quote = languageQuotes[language];
            } else if (elementId && elementId.includes('showCeremonyMemory')) {
                const ceremony = elementId.match(/'([^']+)'/)[1];
                quote = ceremonyQuotes[ceremony];
            } else if (elementId && elementId.includes('showHealthcareMemory')) {
                const healthcare = elementId.match(/'([^']+)'/)[1];
                quote = healthcareQuotes[healthcare];
            } else if (elementId && elementId.includes('showReligiousMemory')) {
                const religious = elementId.match(/'([^']+)'/)[1];
                quote = religiousQuotes[religious];
            }

            if (quote) {
                const quoteElement = document.createElement('div');
                quoteElement.innerHTML = quote;
                quoteElement.style.position = 'fixed';
                quoteElement.style.left = element.getBoundingClientRect().right + 10 + 'px';
                quoteElement.style.top = element.getBoundingClientRect().top + 'px';
                quoteElement.style.background = 'rgba(0, 0, 0, 0.8)';
                quoteElement.style.color = 'white';
                quoteElement.style.padding = '0.5rem 1rem';
                quoteElement.style.borderRadius = '10px';
                quoteElement.style.fontSize = '0.8rem';
                quoteElement.style.fontFamily = 'Kalpurush, sans-serif';
                quoteElement.style.maxWidth = '200px';
                quoteElement.style.zIndex = '1002';
                quoteElement.style.pointerEvents = 'none';
                quoteElement.style.opacity = '0';
                quoteElement.style.transform = 'translateY(-10px)';
                quoteElement.style.transition = 'all 0.3s ease';
                quoteElement.classList.add('hover-quote');

                document.body.appendChild(quoteElement);

                setTimeout(() => {
                    quoteElement.style.opacity = '1';
                    quoteElement.style.transform = 'translateY(0)';
                }, 100);

                element.addEventListener('mouseleave', function () {
                    quoteElement.style.opacity = '0';
                    quoteElement.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        if (quoteElement.parentNode) {
                            quoteElement.remove();
                        }
                    }, 300);
                }, { once: true });
            }
        }

        // Show random cultural quote
        function showCulturalQuote() {
            const quote = culturalQuotes[Math.floor(Math.random() * culturalQuotes.length)];
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = quote;
            quoteElement.style.position = 'fixed';
            quoteElement.style.top = '20px';
            quoteElement.style.right = '20px';
            quoteElement.style.background = 'rgba(255, 255, 255, 0.1)';
            quoteElement.style.backdropFilter = 'blur(10px)';
            quoteElement.style.padding = '1rem 2rem';
            quoteElement.style.borderRadius = '15px';
            quoteElement.style.color = 'white';
            quoteElement.style.fontFamily = 'Kalpurush, sans-serif';
            quoteElement.style.fontSize = '0.9rem';
            quoteElement.style.maxWidth = '300px';
            quoteElement.style.opacity = '0';
            quoteElement.style.transform = 'translateY(-20px)';
            quoteElement.style.transition = 'all 0.5s ease';
            quoteElement.style.zIndex = '1001';
            quoteElement.style.border = '1px solid rgba(255, 255, 255, 0.2)';

            document.body.appendChild(quoteElement);

            // Animate in
            setTimeout(() => {
                quoteElement.style.opacity = '1';
                quoteElement.style.transform = 'translateY(0)';
            }, 100);

            // Remove after 5 seconds
            setTimeout(() => {
                quoteElement.style.opacity = '0';
                quoteElement.style.transform = 'translateY(-20px)';
                setTimeout(() => quoteElement.remove(), 500);
            }, 5000);
        }

        // Show cultural quote every 30 seconds
        setInterval(showCulturalQuote, 30000);

        // Initial quote after 5 seconds
        setTimeout(showCulturalQuote, 5000);
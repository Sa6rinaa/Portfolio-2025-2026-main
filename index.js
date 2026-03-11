      // Fonction pour faire défiler les projets
        function scrollProjects(distance) {
            const grid = document.querySelector('.projets-grid');
            grid.scrollBy({
                left: distance,
                behavior: 'smooth'
            });
        }

        // Fonction pour ouvrir le modal
        function openModal(projectId) {
            const modal = document.getElementById('modal-' + projectId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        // Fonction pour fermer le modal
        function closeModal(event, projectId) {
            event.stopPropagation();
            const modal = document.getElementById('modal-' + projectId);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Fermer avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        });
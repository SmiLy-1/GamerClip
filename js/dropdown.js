<script>
  document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const icon = dropdown.querySelector('.icon');
      const menu = dropdown.querySelector('.dropdown-menu');

      icon.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // Évite la fermeture immédiate par window click

        // Ferme tous les autres menus
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if (m !== menu) m.style.display = 'none';
        });

        // Toggle le menu cliqué
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      });
    });

    // Ferme tous les menus si clic hors dropdown
    window.addEventListener('click', function () {
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        m.style.display = 'none';
      });
    });
  });
</script>

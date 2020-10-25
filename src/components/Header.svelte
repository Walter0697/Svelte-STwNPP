<script>
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap';

    import ThemeToggle from './ThemeToggle.svelte';
    import { getTheme } from '../../scripts/utilities/theme';
    let currentTheme = (getTheme() == 'dark-mode') ? 'dark' : 'light';

    function fetchTheme() {
        currentTheme = (getTheme() == 'dark-mode') ? 'dark' : 'light';
    }

    //for mobile site
  let isOpen = false;

    function handleUpdate(event) {
    isOpen = event.detail.isOpen;
    }
</script>

<Navbar bind:color={currentTheme} light expand="md">
<NavbarBrand href="/"><h3>Pointless Translator</h3></NavbarBrand>
<NavbarToggler on:click={() => (isOpen = !isOpen)} />
<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
  <Nav class="ml-auto" navbar>
    <NavItem class="top-space">
      <NavLink href="https://github.com/Walter0697/Svelte-STwNPP">
          <p>GitHub</p>
      </NavLink>
    </NavItem>
    <NavItem class="theme-button top-space">
      <ThemeToggle on:theme-change={fetchTheme}><p>Theme</p></ThemeToggle>
    </NavItem>
  </Nav>
</Collapse>
</Navbar>
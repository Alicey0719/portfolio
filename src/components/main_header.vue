<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class='nav-link' active-class="active" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tech" class='nav-link' active-class="active" exact>Tech</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
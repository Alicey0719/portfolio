<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class='navbar-brand'>Portfolio</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navibar" aria-controls="navibar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navibar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" class='nav-link' active-class="active" exact>Home</router-link>
            </li>
            <!-- <li class="nav-item">
                <router-link to="/tech" class='nav-link' active-class="active" exact>Tech</router-link>
            </li> -->
            <li class="nav-item">
                <router-link to="/terms" class='nav-link' active-class="active" exact>Terms</router-link>
            </li>
        </ul>
    </div>
    </nav>

</template>
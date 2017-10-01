<template>
    <header class="hero is-info">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Ava Test Suite Example
                </h1>
                <h2 class="subtitle">
                    Ava Vue example
                </h2>
                <nav class="navbar" role="navigation" aria-label="dropdown navigation">
                    <ul class="navbar-item">
                        <li>
                            <router-link to="/" class="navbar-item">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/Product" class="navbar-item">Product</router-link>
                        </li>
                        <li>
                            <router-link to="/Contact" class="navbar-item">Contact</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'app-header'
    }
</script>
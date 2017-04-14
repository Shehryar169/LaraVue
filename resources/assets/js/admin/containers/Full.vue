<template>
    <div class="app">
        <nprogress-container></nprogress-container>
        <AppHeader/>
        <div class="app-body">
            <Sidebar/>
            <main class="main">
                <div class="container-fluid">
                        <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
    import AppHeader from '../components/Header'
    import Sidebar from '../components/Sidebar'

    export default {
        name: 'full',
        components: {
            AppHeader,
            Sidebar,
            NprogressContainer
        }
    }
</script>

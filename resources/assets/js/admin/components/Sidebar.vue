<template>
    <div class="sidebar">
        <nav class="sidebar-menu">
            <div>
                <div class="user-info">
                    <img src="img/avatar.png" width="100" height="100" alt="">
                    <p>Mehdi Ak</p>
                    <p>aspmvc7@gmail.com</p>
                </div>
                <ul>
                    <router-link v-for="sidebar in filterParents(sidebars)" tag="li" :to="sidebar.url" :disabled="filterChildren(sidebars,sidebar.id).length>0">
                        <a class="nav-link" v-if="filterChildren(sidebars,sidebar.id).length==0"><i :class="sidebar.icon_class"></i><span class="nav-text"> {{trans(sidebar.title)}} </span></a>
                        <div class="nav-link" v-if="filterChildren(sidebars,sidebar.id).length>0" @click="handleClick"><i :class="sidebar.icon_class"></i> <span
                                class="nav-text">{{trans(sidebar.title)}}</span> <i class="fa subnav-icon"></i></div>
                        <ul v-if="filterChildren(sidebars,sidebar.id).length>0">
                            <router-link v-for="sub in filterChildren(sidebars,sidebar.id)" tag="li" :to="sub.url" exact><a class="nav-link"><i
                                    :class="sub.icon_class"></i> <span class="nav-text">{{trans(sub.title)}}</span> </a>
                            </router-link>
                        </ul>
                    </router-link>
                </ul>
                <ul class="sidebar-fixed">
                    <li>2017 april 14 - 14:23</li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'sidebar',
        methods: {
            handleClick (e) {
                e.preventDefault()
                e.target.parentElement.parentElement.classList.toggle('open')
            },
            filterParents: function (items) {
                return items.filter(function (item) {
                    return item.parent_id == 0;
                })
            },
            filterChildren (items, parent_id){
                return items.filter(function (item) {
                    return item.parent_id == parent_id;
                })
            }
        },
        computed: mapGetters({
            sidebars: 'sidebar:getSidebar',
        }),
    }
</script>
<template>
    <nav class="navbar navbar-expand-lg x-pad">
        <div class="nav-left">
            <a class="navbar-menu open mr-5" @click.prevent="$emit('show-menu')"  v-if="!menuShow"><img class="img-fluid" src="../assets/icons/Menu.svg"></a>
            <a class="navbar-menu mr-5" href="#" @click.prevent="$emit('close-menu')" v-else><img class="img-fluid" src="../assets/icons/close.svg" ></a>
            <a class="navbar-brand" href="#"><img class="img-fluid" src="../assets/icons/link-logo.svg" ></a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> <img class="img-fluid" src="../assets/icons/bars.svg"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <form class="form-inline">
                        <Search :show=show @expand="show = !show"></Search>
                    </form>
                    <div class="tooltip-item">search</div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.848" height="31" viewBox="0 0 27.848 31"><path d="M138.02,421.625a4.693,4.693,0,0,1-4.688-4.688.938.938,0,0,1,1.875,0,2.812,2.812,0,0,0,5.625,0,.938.938,0,0,1,1.875,0A4.693,4.693,0,0,1,138.02,421.625Zm0,0" transform="translate(-125.52 -390.625)" fill="#fff"/><path d="M22.812,86.5H2.187A2.188,2.188,0,0,1,.765,82.65a.864.864,0,0,1,.1-.075A8.4,8.4,0,0,0,3.75,76.238V72.75A8.76,8.76,0,0,1,12.5,64a3.765,3.765,0,0,1,.616.038.937.937,0,1,1-.308,1.849,1.966,1.966,0,0,0-.309-.011A6.883,6.883,0,0,0,5.625,72.75v3.487A10.281,10.281,0,0,1,2,84.076c-.019.015-.035.029-.055.043a.309.309,0,0,0-.066.194.316.316,0,0,0,.312.312H22.812a.316.316,0,0,0,.313-.312.3.3,0,0,0-.068-.194c-.019-.014-.035-.027-.054-.043a10.278,10.278,0,0,1-3.629-7.839V74.875a.937.937,0,1,1,1.875,0v1.362a8.4,8.4,0,0,0,2.889,6.341.911.911,0,0,1,.1.073A2.187,2.187,0,0,1,22.812,86.5Zm0,0" transform="translate(0 -59.25)" fill="#fff"/><path d="M268.512,6.25A6.25,6.25,0,1,1,262.262,0,6.25,6.25,0,0,1,268.512,6.25Zm0,0" transform="translate(-240.664)" fill="#8dc043"/></svg>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <small class="font-xs regular">Recent Notification</small>
                        <li class="dropdown-item font-xs regular">You have an upcomming appointment today! <a class="text-green" href="#">Check-in Now</a></li>
                        <div class="dropdown-divider"></div>
                        <li class="dropdown-item font-xs regular"><a href="#">Rate your last service appointment</a></li>
                        <div class="dropdown-divider"></div>
                        <li class="dropdown-item font-xs regular"><a href="#">Your payment request has been approved</a></li>
                        <div class="dropdown-divider"></div>
                        <li class="dropdown-item font-sm regular"><a class="text-green" href="#">All Notifications <img class="img-fluid" src="../assets/icons/arrow.svg"></a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link user-info" href="#">
                        <div class="user-info-image"></div>
                        <h4 class="font-xs light">user name</h4>
                    </a>
                </li>
                <li class="nav-item dropdown settings">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="img-fluid" src="../assets/icons/settings.svg">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li class="dropdown-item font-xs regular " href="#">
                        <small>Language</small>
                        <a class=" dropdown-link active" href="#">English <img class="img-fluid" src="../assets/icons/tick.svg"></a>
                        <a class="dropdown-link" href="#">العربيه<img class="img-fluid" src="../assets/icons/tick.svg"></a>
                    </li>
                    <div class="dropdown-divider"></div>

                    <li class="dropdown-item">
                        <small>Font Size</small>
                        <a href="#">English</a>
                        <a href="#">العربيه</a>
                    </li>
                    <div class="dropdown-divider"></div>

                    <li class="dropdown-item">
                        <small>Account</small>
                        <a href="#">Signout</a>
                    </li>
                    </div>

                </li>

            </ul>
        </div>
    </nav>
</template>
<script>
import Search from './Search';
    export default{
        data(){
            return{
                show:false,
            }
        },
        props:['menuShow'],
        components:{
            Search
        }

    }
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';
@import '../scss/_variables';

    nav{
        background-color:$green;
        height:5rem;
        position: fixed;
        left:0;
        top:0;
        width:100%;
        z-index:18;
        .navbar-menu{
            width:40px;
            display:inline-block;
            &.open{
                img{
                    width:35px;
                }
            }
            img{
                width:28px;
            }
        }
        .navbar-collapse{
            &.show, &.collapsing{
            background-color: $green;
            position:absolute;
            right:0;
            top:5rem;
            align-items: flex-end;
            width:100%;

            }
        }
        ul{

            align-items:center;
            @media screen and (max-width:991.98px){
                flex-direction: row;
                flex-wrap: wrap;
            }
        .nav-item{

            height:45px;
            position: relative;
            &:first-of-type{
                @media screen and (max-width:991.98px){
                    width:100%;
                }
            }
            &.dropdown{
                position:relative;
                z-index:2;
                &.settings{
                    .dropdown-menu{
                        @media screen and (max-width:991.98px){
                            right:0;
                            left:auto;
                            min-width:12rem
                        }
                    .dropdown-item{
                        flex-direction: column !important;
                        small{
                            padding:0;
                        }
                        .dropdown-link{
                            width:100%;
                            @include display-flex(row,space-between,center);
                            &.active{
                                img{
                                    display: block;
                                }
                            }
                            img{
                                width:20px;
                                display:none;
                            }
                        }
                    }
                    }
                }
                .dropdown-menu{
                right:0;
                left:auto;
                min-width:12rem;
                position:absolute;
                @media screen and (max-width:991.98px){
                    left:-15px;
                    min-width:320px;
                }


                .dropdown-item{
                    @include display-flex(row, flex-start,flex-start);
                    flex-wrap: wrap;
                    &:hover{
                        background-color: transparent;
                        cursor: pointer;
                    }
                    &:last-of-type{
                        justify-content: center;
                    }
                    .text-green{
                        &:hover{
                            color:$primary !important;
                        }
                    }
                }
                small{
                    padding: 0.25rem 1.5rem;
                    color:$gray-1;
                    display: inline-block;
                }
                }


            }

            &:not(:last-of-type){
                margin-right:24px;
                @media screen and (max-width:991.98px){
                    margin:8px 16px;
                }
            }

            img,svg{
                width:25px;
                height:25px;
            }


            .nav-link{
                text-transform: capitalize;
                height: 100%;
                padding:8px 12px;
                &.dropdown-toggle{
                    &:after{
                        display: none;
                    }
                    &:hover{
                    background-color:$primary;
                    border-radius:0.25rem;
                    svg{
                        path{
                            &:last-of-type{
                                fill:#fff;
                            }
                        }
                    }
                    }


                }
                &.user-info{
                    @include display-flex(row, flex-start,center);

                    .user-info-image{
                    background:url('../assets/images/user.jpg') no-repeat ;
                    background-size:cover;
                    border-radius: 50%;
                    width:40px;
                    height:40px;
                    margin-right:16px;
                    }
                    h4{
                        color:#fff;

                    }
                }

            }
            form{
                height:100%;

            }
            }
        }
        .tooltip-item{
            padding:8px 16px;
            background-color: rgba(0,0,0,0.4);
            color:#fff;
            border-radius: 9px;
            text-transform: capitalize;
            position: absolute;
            left:50%;
            transform:translateX(-50%);
            display:none
        }
    }


</style>
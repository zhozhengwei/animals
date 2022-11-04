<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="
            navbar navbar-expand-lg
            blur blur-rounded
            top-0
            z-index-3
            shadow
            position-absolute
            my-3
            py-2
            start-0
            end-0
            mx-4
          "
        >
          <div class="container-fluid px-0">
            <router-link to="/"
              ><img :src="url" style="width: 150px; height: 100%"
            /></router-link>
            <button
              class="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div
              class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100"
              id="navigation"
            >
              <ul class="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <router-link
                    class="
                      nav-link
                      ps-2
                      d-flex
                      justify-content-between
                      cursor-pointer
                      align-items-center
                    "
                    to="/"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    关于网站
                    <img
                      src="../../assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      class="arrow ms-1"
                    />
                  </router-link>
                  <div
                    class="
                      dropdown-menu dropdown-menu-animation dropdown-md
                      p-3
                      border-radius-lg
                      mt-0 mt-lg-3
                    "
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="d-none d-lg-block">
                      <div
                        class="
                          dropdown-header
                          text-dark
                          font-weight-bolder
                          d-flex
                          justify-content-cente
                          align-items-center
                          px-0
                        "
                      >
                        网站信息
                      </div>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/aboutus"
                      >
                        <span class="ps-3">关于我们</span>
                      </router-link>
                      <!-- <a href="#" class="dropdown-item border-radius-md">
                        <span class="ps-3">年度报告</span>
                      </a> -->
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/financial"
                      >
                        <span class="ps-3">财务信息</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/contactus"
                      >
                        <span class="ps-3">联系我们</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/apply"
                      >
                        <span class="ps-3">注册会员</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        :to="{path: '/author', query:{id:id}}"
                      >
                        <span class="ps-3">个人主页</span>
                      </router-link>
                      <div
                        class="
                          dropdown-header
                          text-dark
                          font-weight-bolder
                          d-flex
                          justify-content-cente
                          align-items-center
                          px-0
                          mt-3
                        "
                      >
                        个人创作
                      </div>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/blog"
                      >
                        <span class="ps-3">博客</span>
                      </router-link>
                    </div>
                    <div class="d-lg-none">
                      <div
                        class="
                          dropdown-header
                          text-dark
                          font-weight-bolder
                          d-flex
                          justify-content-cente
                          align-items-center
                          px-0
                        "
                      >
                        网站信息
                      </div>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/aboutus"
                      >
                        <span class="ps-3">关于我们</span>
                      </router-link>
                      <!-- <a href="#" class="dropdown-item border-radius-md">
                        <span class="ps-3">年度报告</span>
                      </a> -->
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/financial"
                      >
                        <span class="ps-3">财务信息</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/contactus"
                      >
                        <span class="ps-3">联系我们</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/apply"
                      >
                        <span class="ps-3">注册会员</span>
                      </router-link>
                      <router-link
                        class="dropdown-item border-radius-md"
                        :to="{path: '/author', query:{id:id}}"
                      >
                        <span class="ps-3">个人主页</span>
                      </router-link>
                      <div
                        class="
                          dropdown-header
                          text-dark
                          font-weight-bolder
                          d-flex
                          justify-content-cente
                          align-items-center
                          px-0
                          mt-3
                        "
                      >
                        个人创作
                      </div>
                      <router-link
                        class="dropdown-item border-radius-md"
                        to="/blog"
                      >
                        <span class="ps-3">博客</span>
                      </router-link>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    class="
                      nav-link
                      ps-2
                      d-flex
                      justify-content-between
                      cursor-pointer
                      align-items-center
                    "
                    href="javascript:;"
                    id="dropdownMenuBlocks"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    应用
                    <img
                      src="../../assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      class="arrow ms-1"
                    />
                  </a>
                  <ul
                    class="
                      dropdown-menu
                      dropdown-menu-animation
                      dropdown-lg
                      dropdown-lg-responsive
                      p-3
                      border-radius-lg
                      mt-0 mt-lg-3
                    "
                    aria-labelledby="dropdownMenuBlocks"
                  >
                    <div class="d-none d-lg-block">
                      <li
                        class="
                          nav-item
                          dropdown dropdown-hover dropdown-subitem
                        "
                      >
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="#"
                        >
                          <div class="d-flex">
                            <div
                              class="
                                w-100
                                d-flex
                                align-items-center
                                justify-content-between
                              "
                            >
                              <div>
                                <h6
                                  class="
                                    dropdown-header
                                    text-dark
                                    font-weight-bolder
                                    d-flex
                                    justify-content-cente
                                    align-items-center
                                    p-0
                                  "
                                >
                                  动物百科
                                </h6>
                                <span class="text-sm">动物科普信息</span>
                              </div>
                              <img
                                src="../../assets/img/down-arrow.svg"
                                alt="down-arrow"
                                class="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            :to="{ path: '/biology/animals', query: { id: 1 } }"
                          >
                            陆地动物
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            :to="{ path: '/biology/animals', query: { id: 2 } }"
                          >
                            海洋动物
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            :to="{ path: '/biology/animals', query: { id: 3 } }"
                          >
                            两栖动物
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            :to="{ path: '/biology/animals', query: { id: 4 } }"
                          >
                            淡水动物
                          </router-link>
                          <!-- <router-link class="dropdown-item ps-3 border-radius-md mb-1" href="#">
                            人文教育
                          </router-link> -->
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/biology/action"
                          >
                            你可以做什么
                          </router-link>
                        </div>
                      </li>
                      <li
                        class="
                          nav-item
                          dropdown dropdown-hover dropdown-subitem
                        "
                      >
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="#"
                        >
                          <div class="d-flex">
                            <!-- <div class="icon h-10 me-3 d-flex mt-1">
                              <i class="ni ni-laptop text-gradient text-primary"></i>
                            </div> -->
                            <div
                              class="
                                w-100
                                d-flex
                                align-items-center
                                justify-content-between
                              "
                            >
                              <div>
                                <h6
                                  class="
                                    dropdown-header
                                    text-dark
                                    font-weight-bolder
                                    d-flex
                                    justify-content-cente
                                    align-items-center
                                    p-0
                                  "
                                >
                                  动物图鉴
                                </h6>
                                <span class="text-sm">各类周边</span>
                              </div>
                              <img
                                src="../../assets/img/down-arrow.svg"
                                alt="down-arrow"
                                class="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/humanity/book"
                          >
                            出版物
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/humanity/list"
                          >
                            网站刊物
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/humanity/image"
                          >
                            图鉴
                          </router-link>
                        </div>
                      </li>
                      <li
                        class="
                          nav-item
                          dropdown dropdown-hover dropdown-subitem
                        "
                      >
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="#"
                        >
                          <div class="d-flex">
                            <!-- <div class="icon h-10 me-3 d-flex mt-1">
                              <i class="ni ni-badge text-gradient text-primary"></i>
                            </div> -->
                            <div
                              class="
                                w-100
                                d-flex
                                align-items-center
                                justify-content-between
                              "
                            >
                              <div>
                                <h6
                                  class="
                                    dropdown-header
                                    text-dark
                                    font-weight-bolder
                                    d-flex
                                    justify-content-cente
                                    align-items-center
                                    p-0
                                  "
                                >
                                  普法教育
                                </h6>
                                <span class="text-sm">使用法律的武器保护</span>
                              </div>
                              <img
                                src="../../assets/img/down-arrow.svg"
                                alt="down-arrow"
                                class="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/legal"
                          >
                            野生动物保护法
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/legal/external"
                          >
                            其它相关法律和措施
                          </router-link>
                        </div>
                      </li>
                      <li
                        class="
                          nav-item
                          dropdown dropdown-hover dropdown-subitem
                        "
                      >
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="#"
                        >
                          <div class="d-flex">
                            <!-- <div class="icon h-10 me-3 d-flex mt-1">
                              <i class="ni ni-notification-70 text-gradient text-primary"></i>
                            </div> -->
                            <div
                              class="
                                w-100
                                d-flex
                                align-items-center
                                justify-content-between
                              "
                            >
                              <div>
                                <h6
                                  class="
                                    dropdown-header
                                    text-dark
                                    font-weight-bolder
                                    d-flex
                                    justify-content-cente
                                    align-items-center
                                    p-0
                                  "
                                >
                                  媒体中心
                                </h6>
                                <span class="text-sm">社区内容创建</span>
                              </div>
                              <img
                                src="../../assets/img/down-arrow.svg"
                                alt="down-arrow"
                                class="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/media/list"
                          >
                            近期新闻
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/media/bilibili"
                          >
                            bilibili视频
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/media/self"
                          >
                            纪录片与宣传片
                          </router-link>
                        </div>
                      </li>
                      <li
                        class="
                          nav-item
                          dropdown dropdown-hover dropdown-subitem
                        "
                      >
                        <a
                          class="dropdown-item py-2 ps-3 border-radius-md"
                          href="#"
                        >
                          <div class="d-flex">
                            <!-- <div class="icon h-10 me-3 d-flex mt-1">
                              <i class="ni ni-app text-gradient text-primary"></i>
                            </div> -->
                            <div
                              class="
                                w-100
                                d-flex
                                align-items-center
                                justify-content-between
                              "
                            >
                              <div>
                                <h6
                                  class="
                                    dropdown-header
                                    text-dark
                                    font-weight-bolder
                                    d-flex
                                    justify-content-cente
                                    align-items-center
                                    p-0
                                  "
                                >
                                  活动中心
                                </h6>
                                <span class="text-sm">公益活动的开展</span>
                              </div>
                              <img
                                src="../../assets/img/down-arrow.svg"
                                alt="down-arrow"
                                class="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/activity"
                          >
                            活动列表
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/activity/history"
                          >
                            历史活动
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/activity/time"
                          >
                            活动影像
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/activity/apply"
                          >
                            成为志愿者
                          </router-link>
                          <router-link
                            class="dropdown-item ps-3 border-radius-md mb-1"
                            to="/activity/donate"
                          >
                            支持我们
                          </router-link>
                        </div>
                      </li>
                    </div>
                    <div class="row d-lg-none">
                      <div class="col-md-12">
                        <div class="d-flex mb-2">
                          <!-- <div class="icon h-10 me-3 d-flex mt-1">
                            <i class="ni ni-single-copy-04 text-gradient text-primary"></i>
                          </div> -->
                          <div
                            class="
                              w-100
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <h6
                                class="
                                  dropdown-header
                                  text-dark
                                  font-weight-bolder
                                  d-flex
                                  justify-content-cente
                                  align-items-center
                                  p-0
                                "
                              >
                                动物百科
                              </h6>
                            </div>
                          </div>
                        </div>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ path: '/biology/animals', query: { id: 1 } }"
                        >
                          陆地动物
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ path: '/biology/animals', query: { id: 2 } }"
                        >
                          海洋动物
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ path: '/biology/animals', query: { id: 3 } }"
                        >
                          两栖动物
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ path: '/biology/animals', query: { id: 4 } }"
                        >
                          淡水动物
                        </router-link>
                        <!-- <router-link class="dropdown-item ps-3 border-radius-md mb-1" href="#">
                            人文教育
                          </router-link> -->
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/biology/action"
                        >
                          你可以做什么
                        </router-link>
                        <div class="d-flex mb-2 mt-3">
                          <!-- <div class="icon h-10 me-3 d-flex mt-1">
                            <i class="ni ni-laptop text-gradient text-primary"></i>
                          </div> -->
                          <div
                            class="
                              w-100
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <h6
                                class="
                                  dropdown-header
                                  text-dark
                                  font-weight-bolder
                                  d-flex
                                  justify-content-cente
                                  align-items-center
                                  p-0
                                "
                              >
                                动物图鉴
                              </h6>
                            </div>
                          </div>
                        </div>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/humanity/book"
                        >
                          出版物
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/humanity/list"
                        >
                          网站刊物
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/humanity/image"
                        >
                          图鉴
                        </router-link>
                        <div class="d-flex mb-2 mt-3">
                          <!-- <div class="icon h-10 me-3 d-flex mt-1">
                            <i class="ni ni-badge text-gradient text-primary"></i>
                          </div> -->
                          <div
                            class="
                              w-100
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <h6
                                class="
                                  dropdown-header
                                  text-dark
                                  font-weight-bolder
                                  d-flex
                                  justify-content-cente
                                  align-items-center
                                  p-0
                                "
                              >
                                普法教育
                              </h6>
                            </div>
                          </div>
                        </div>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/legal"
                        >
                          野生动物保护法
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/legal/external"
                        >
                          其它相关法律和措施
                        </router-link>
                        <div class="d-flex mb-2 mt-3">
                          <!-- <div class="icon h-10 me-3 d-flex mt-1">
                            <i class="ni ni-notification-70 text-gradient text-primary"></i>
                          </div> -->
                          <div
                            class="
                              w-100
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <h6
                                class="
                                  dropdown-header
                                  text-dark
                                  font-weight-bolder
                                  d-flex
                                  justify-content-cente
                                  align-items-center
                                  p-0
                                "
                              >
                                媒体中心
                              </h6>
                            </div>
                          </div>
                        </div>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/media/list"
                        >
                          近期新闻
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/media/bilibili"
                        >
                          bilibili视频
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/media/self"
                        >
                          纪录片与宣传片
                        </router-link>
                        <div class="d-flex mb-2 mt-3">
                          <!-- <div class="icon h-10 me-3 d-flex mt-1">
                            <i class="ni ni-app text-gradient text-primary"></i>
                          </div> -->
                          <div
                            class="
                              w-100
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <h6
                                class="
                                  dropdown-header
                                  text-dark
                                  font-weight-bolder
                                  d-flex
                                  justify-content-cente
                                  align-items-center
                                  p-0
                                "
                              >
                                活动中心
                              </h6>
                            </div>
                          </div>
                        </div>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/activity"
                        >
                          活动列表
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/activity/history"
                        >
                          历史活动
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/activity/time"
                        >
                          活动影像
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/activity/apply"
                        >
                          成为志愿者
                        </router-link>
                        <router-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          to="/activity/donate"
                        >
                          支持我们
                        </router-link>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="nav-item ms-lg-auto">
                  <!-- <a class="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/soft-ui-design-system" target="_blank">
                    <i class="fa fa-github me-1"></i>
                    <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
                  </a> -->
                </li>
                
                  <li class="nav-item my-auto ms-3 ms-lg-0" v-if="props.toshow">
                    <div v-if="loginShow">
                      <router-link
                    class="
                      btn btn-sm btn-outline-success btn-round
                      mb-0
                      me-1
                      mt-2 mt-md-0
                    "
                    to="/login"
                    >登录</router-link
                  >
                </div>
                  
                </li>
                <li class="nav-item my-auto ms-3 ms-lg-0" v-if="props.toshow">
                  <router-link
                    class="
                      btn btn-sm
                      bg-gradient-dark
                      btn-round
                      mb-0
                      me-1
                      mt-2 mt-md-0
                    "
                    to="/register"
                    >注册</router-link
                  >
                </li>
                <li class="nav-item my-auto ms-3 ms-lg-0" v-if="showUser">
                  <a-dropdown>
                    <a-avatar
                      
                      size="large"
                      :src="user.avatar==null?'#':user.avatar"
                    ></a-avatar>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item>
                          <router-link target="_blank" rel="noopener noreferrer" :to="{path: '/author', query:{id:id}}">
                            个人中心
                          </router-link>
                        </a-menu-item>
                        <a-menu-item>
                          <a target="_blank" rel="noopener noreferrer" @click="logout">
                            退出登录
                          </a>
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, inject  } from "vue";
import { message } from "ant-design-vue";
import API from "../../plugins/axios/index.js";
// images

export default defineComponent({
  props: {
    toshow: Boolean,
  },
  data() {
    return {
      id: this.user == null? 0: this.user.uid,
    };
  },
  setup(props) {
    let showUser = ref(true);
    let loginShow = ref(false);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const user = reactive(userinfo);
    const refresh = inject("reload");
    console.log("=======> userinfo ====>", userinfo);
    console.log("=======> user ====>", user);
      if (userinfo === null) {
        console.log("不为undefined");
        // loginShow = ref(false);
        showUser = ref(false);
        loginShow = ref(true)
        console.log("=======> showUser ====>", showUser);
        // console.log("=======> loginShow ====>",loginShow);
      }
    // onMounted( (showUser, user, loginShow) => {
      // const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      // console.log("=======> userinfo ====>", userinfo);
      // if (userinfo != undefined) {
      //   console.log("不为undefined");
      //   user = userinfo;
      //   // loginShow = ref(false);
      //   // showUser = ref(true);
      //   console.log("=======> user ====>", user);
      //   console.log("=======> showUser ====>", showUser);
      //   // console.log("=======> loginShow ====>",loginShow);
      // }
    // });
    console.log("=======> ++++++++showUser ====>", showUser);
    console.log("=======> ++++++++loginShow ====>", loginShow);

    const logout = function() {
      API({
        url: "member/logout",
        method: "post",
        headers:{
          'token':localStorage.getItem("token")
        }
      }).then((res)=>{
        console.log("退出登录返回===>",res.data)
        if(res.data.code === 0){
          message.success({
          content: () => "退出成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        localStorage.removeItem("userinfo");
        localStorage.removeItem("token");
        location. reload();
        this.$router.go(0);
        }else{
          message.error({
          content: () => res.data.message,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        }
      })
      
    }
    return {
      url: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/logo_20220921_uugai.com_1663698548107.png",
      props,
      user,
      showUser,
      loginShow,
      logout,
      refresh
    };
  },
});
</script>

<style>
</style>
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", 
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: {
            title: "Home"
        }
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("../views/Login.vue"),
        meta: {
            title: "登录"
        }
    },
    {
        name: "Register",
        path: "/register",
        component: ()=> import("../views/Register.vue"),
        meta: {
            title: "注册"
        }
    },
    {
        name: "AboutUs",
        path: "/aboutus",
        component: ()=> import("../views/AboutUs.vue"),
        meta: {
            title: "关于我们"
        }
    },
    {
        name: "ContactUs",
        path: "/contactus",
        component: ()=> import("../views/ContactUsSimple.vue"),
        meta: {
            title: "联系我们"
        }
    },
    {
        name: "Author",
        path: "/author",
        component: ()=> import("../views/AuthorPerson.vue"),
        meta: {
            title: "个人主页"
        },
        //beforeEnter(to,form.next)=>{判断是否登陆代码}，点击进入admin也面时，路由独享守卫启用
        beforeEnter:(to,form,next)=>{
            if (!localStorage.getItem('userinfo')) {
                if (to.name == "Login") {
                    next();
                } else {
                    router.push("/login")
                }
            } else {
                next();
            }
        }
    },
    {
        name: "SquareBlog",
        path: "/blog",
        component: ()=> import("../views/SquareBlog.vue"),
        meta: {
            title: "博客广场"
        }
    },
    {
        name: "Financial",
        path: "/financial",
        component: ()=> import("../views/FinancialReport.vue"),
        meta: {
            title: "财务信息"
        }
    },
    {
        name: "Apply",
        path: "/apply",
        component: ()=> import("../views/ApplyMember.vue"),
        meta: {
            title: "申请会员"
        }
    },
    {
        name: "Siginblog",
        path: "/blog/sigin",
        component: ()=> import("../views/blog/AloneBlog.vue"),
        meta: {
            title: "文章页面"
        }
    },
    {
        name: "Edtior",
        path: "/blog/Siginblog/edtior",
        component: ()=> import("../views/blog/EditorMarkdown.vue"),
        meta: {
            title: "编辑文章"
        },
        //beforeEnter(to,form.next)=>{判断是否登陆代码}，点击进入admin也面时，路由独享守卫启用
        beforeEnter:(to,form,next)=>{
            if (!localStorage.getItem('userinfo')) {
                if (to.name == "Login") {
                    next();
                } else {
                    router.push("/login")
                }
            } else {
                next();
            }
        }
    },
    {
        name: "Activity",
        path: "/activity",
        component: ()=> import("../views/activity/ActivityCenter.vue"),
        meta: {
            title: "活动中心"
        }
    },
    {
        name: "History",
        path: "/activity/history",
        component: ()=> import("../views/activity/ActivityHistory.vue"),
        meta: {
            title: "历史活动"
        }
    },
    {
        name: "ApplyVolunteer",
        path: "/activity/apply",
        component: ()=> import("../views/activity/ApplyVolunteer.vue"),
        meta: {
            title: "申请志愿者"
        },
        //beforeEnter(to,form.next)=>{判断是否登陆代码}，点击进入admin也面时，路由独享守卫启用
        beforeEnter:(to,form,next)=>{
            if (!localStorage.getItem('userinfo')) {
                if (to.name == "Login") {
                    next();
                } else {
                    router.push("/login")
                }
            } else {
                next();
            }
        }
    },
    {
        name: "Donate",
        path: "/activity/donate",
        component: ()=> import("../views/activity/ActivityDonate.vue"),
        meta: {
            title: "支持我们"
        }
    },
    {
        name: "SiginActivity",
        path: "/activity/specific/sigin",
        component: ()=> import("../views/activity/ActivitySigin.vue"),
        meta: {
            title: "单个活动页面"
        }
    },
    {
        name: "VideoTime",
        path: "/activity/time",
        component: ()=> import("../views/activity/ActivityTime"),
        meta: {
            title: "活动时间轴"
        }
    },
    {
        name: "Attend",
        path: "/activity/specific/sigin/attend",
        component: ()=> import("../views/activity/AttendActivity.vue"),
        meta: {
            title: "参加活动"
        },
        //beforeEnter(to,form.next)=>{判断是否登陆代码}，点击进入admin也面时，路由独享守卫启用
        beforeEnter:(to,form,next)=>{
            if (!localStorage.getItem('userinfo')) {
                if (to.name == "Login") {
                    next();
                } else {
                    router.push("/login")
                }
            } else {
                next();
            }
        }
    },
    {
        name: "MediaList",
        path: "/media/list",
        component: ()=> import("../views/media/DocumentCenter.vue"),
        meta: {
            title: "新闻列表"
        }
    },
    {
        name: "AloneNewPaper",
        path: "/media/list/alone",
        component: ()=> import("../views/media/AloneNewPaper.vue"),
        meta: {
            title: "新闻文章"
        }
    },
    {
        name: "VideoBilibili",
        path: "/media/bilibili",
        component: ()=> import("../views/media/VideoBilibilis.vue"),
        meta: {
            title: "bilibili"
        }
    },
    {
        name: "VideoSelf",
        path: "/media/self",
        component: ()=> import("../views/media/VideoSelf.vue"),
        meta: {
            title: "网站视频"
        }
    },
    {
        name: "LegaiEducation",
        path: "/legal",
        component: ()=> import("../views/lows/LowText.vue"),
        meta: {
            title: "普法"
        }
    },
    {
        name: "ExternalLinks",
        path: "/legal/external",
        component: ()=> import("../views/lows/ExternalLinks.vue"),
        meta: {
            title: "外部链接"
        }
    },
    {
        name: "Animals",
        path: "/biology/animals",
        component: ()=> import("../views/animalClassification/ClassificationAnimal.vue"),
        meta: {
            title: "大分区的生物分类"
        }
    },
    {
        name: "AloneAnimals",
        path: "/biology/animals/alone",
        component: ()=> import("../views/animalClassification/BiologyAlone.vue"),
        meta: {
            title: "动物具体信息"
        }
    },
    {
        name: "Action",
        path: "/biology/action",
        component: ()=> import("../views/animalClassification/YouCanAction.vue"),
        meta: {
            title: "问题回答"
        }
        ,
        //beforeEnter(to,form.next)=>{判断是否登陆代码}，点击进入admin也面时，路由独享守卫启用
        beforeEnter:(to,form,next)=>{
            if (!localStorage.getItem('userinfo')) {
                if (to.name == "Login") {
                    next();
                } else {
                    router.push("/login")
                }
            } else {
                next();
            }
        }
    },
    {
        name: "Book",
        path: "/humanity/book",
        component: ()=> import("../views/publication/PublicationBook.vue"),
        meta: {
            title: "推荐图书"
        }
    },
    {
        name: "Publication",
        path: "/humanity/list",
        component: ()=> import("../views/publication/PublicationLink.vue"),
        meta: {
            title: "刊物"
        }
    },
    {
        name: "Image",
        path: "/humanity/image",
        component: ()=> import("../views/publication/ImageInformation.vue"),
        meta: {
            title: "图库"
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
  })



export default router

  
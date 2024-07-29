let childRoute = [
    {
        path: 'ai_demo/image_detect',
        component: resolve => require(['@/components/ai_demo/image_detect'], resolve),
        name: 'image_detect',
        meta: {
            menuname: "image_detect"
        }
    },

    {
        path: 'ai_demo/video_detect',
        component: resolve => require(['@/components/ai_demo/video_detect'], resolve),
        name: 'video_detect',
        meta: {
            menuname: "video_detect"
        }
    },


    {
        path: '*',
        redirect:'ai_demo/image_detect'
    }
]
let route = [
    // {
    //     path: '/',
    //     component: resolve => require(['@/components/home'], resolve),
    //     children: childRoute,
    //     redirect:'/main/ai_demo/image_detect' 
    // },
    {
        path: '/main',
        name: 'main',
        component: resolve => require(['@/components/home'], resolve),
        children: childRoute,
        redirect:'/main/ai_demo/image_detect'    
    },
    {
        path: '*',
        redirect:'/main'
    }
]

export default route
let childRoute = [
    {
        path: 'ai_demo/object_recognition_image_detect',
        component: resolve => require(['@/components/ai_demo/object_recognition_image_detect'], resolve),
        name: 'object_recognition_image_detect',
        meta: {
            menuname: "object_recognition_image_detect"
        }
    },

    {
        path: 'ai_demo/object_recognition_video_detect',
        component: resolve => require(['@/components/ai_demo/object_recognition_video_detect'], resolve),
        name: 'object_recognition_video_detect',
        meta: {
            menuname: "object_recognition_video_detect"
        }
    },


    {
        path: 'ai_demo/mask_recognition_image_detect',
        component: resolve => require(['@/components/ai_demo/mask_recognition_image_detect'], resolve),
        name: 'mask_recognition_image_detect',
        meta: {
            menuname: "mask_recognition_image_detect"
        }
    },
    {
        path: 'ai_demo/car_recognition_image_detect',
        component: resolve => require(['@/components/ai_demo/car_recognition_image_detect'], resolve),
        name: 'car_recognition_image_detect',
        meta: {
            menuname: "car_recognition_image_detect"
        }
    },

    {
        path: 'ai_demo/car_recognition_video_detect',
        component: resolve => require(['@/components/ai_demo/car_recognition_video_detect'], resolve),
        name: 'car_recognition_video_detect',
        meta: {
            menuname: "car_recognition_video_detect"
        }
    },

    {
        path: '*',
        redirect:'ai_demo/object_recognition_image_detect'
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
        redirect:'/main/ai_demo/object_recognition_image_detect'    
    },
    {
        path: '*',
        redirect:'/main'
    }
]

export default route
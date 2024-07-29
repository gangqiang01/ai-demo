//create form data

const executorPropertyData = [
    {
        type:'input',
        field:'path',
        title: this.$t('label.exePath'),
        value:'',
        props: {
            size: "mini",
            placeholder: this.$t('label.exePath')
        },
        validate:[
            { required: true, validator: validateName, trigger: 'blur' },
        ],
    },
    {
        type:'input',
        size:"mini",
        field:'parameter',
        title: this.$t('label.parameter'),
        value:'',
        props: {
            size: "mini",
            placeholder: this.$t('label.parameter')
        },
        validate:[
            { required: true, validator: validateName, trigger: 'blur' },
        ],
    },
] 

const executorDeviceData = [
    {
        type:'select',
        field:'unit',
        title: this.$t('label.collectInterval'),
        value:'ms',
        props: {
            size: "mini",
        },
        col:{
            span:12
        },
        options: [
            {"value": "ms", "label": "Milliseconds"},
            {"value": "s", "label": "Seconds"},
            {"value": "m", "label": "Minutes"},
            {"value": "h", "label": "Hours"},
        ],
    },
    {
        type:'input',
        field:'interval',
        title: "",
        value:'',
        props: {
            size: "mini",
            placeholder: this.$t('label.collectInterval')
        },
        col:{
            span:12
        },
        validate:[
            {validator: validateName, trigger: 'blur' },
        ],
    },
]

export default {
    executorPropertyData,
    executorDeviceData
}
export default {
    data() {
        return {
            form:{
                newAccount: '',
                checked: false
            }
        };
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show(oV, nV){
            if (this.show) {
               this.initData()
            }
        }
    },
    components: {},

    computed: {},

    created() {},

    mounted() {
       
    },

    methods: {
        initData(){
            Object.assign(this.$data, this.$options.data())
        },
        success() {
            this.$emit("success",this.form)
        },
        cancel() {
            this.$emit('cancel')
        }
    }
}
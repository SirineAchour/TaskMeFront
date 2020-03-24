<script>
    export default({
        name: "playground",
        data () {
            console.log("in data");
            return {
                info: null
            }
        },
        mounted () {
            console.log("inmounted");
            axios
                .get('http://localhost/Taskme/public/api/tasks')
                .then(response => (this.info = response))
        }
    })
 /*   export default({

        data () {
            return {
                info: null
            }
        },
        mounted () {
            axios
                .get('http://localhost/Taskme/public/api/tasks')
                .then(response => (this.info = response))
        }
    })*/
</script>
<template>
<div id="app">
    {{ info }}
    blah blah
</div>
</template>


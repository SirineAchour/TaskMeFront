<html>
<body>

</body>
</html>
<script>

    export default { mounted(){
            axios
                .post(
                    "http://localhost/TaskMe/public/api/post",
                    JSON.stringify({
                        task_id: 1,
                        client_id: 1,
                        date: "2020-01-03",
                        description: "aaa",
                        country: "tn",
                        city: "nassr",
                    })
                ).then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config); })
                .catch(function(error) {
                    console.log(error);
                });
        }}

</script>

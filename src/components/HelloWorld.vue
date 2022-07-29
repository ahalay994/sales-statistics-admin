<template>
    <div class="card">
        <button type="button" @click="wsSendPing">wsSendEcho</button>
        <button type="button" @click="wsSendEcho">wsSendEcho</button>
        <pre>{{ msg }}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myWs: null,
            msg: '',
        }
    },
    mounted() {
        try {
            this.myWs = new WebSocket('ws://localhost:9000');
            console.dir(this.myWs);
            this.myWs.onopen = () => {
                console.log('подключился');
            };

            this.myWs.onmessage = (message) => {
                console.log('Message: %s', message.data);
                console.log('this.msg', this.msg);
                this.msg = JSON.parse(message.data);
                console.log('message', this.msg);
            };

            this.myWs.onerror = (error) => {
                console.log(error);
            }

            this.myWs.onclose = () => {
                console.log('отключился');
            }
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        wsSendEcho() {
            this.myWs.send(JSON.stringify({action: 'ECHO', data: 'value.toString()'}));
        },
        wsSendPing() {
            this.myWs.send(JSON.stringify({action: 'PING'}));
        }
    }
}

</script>

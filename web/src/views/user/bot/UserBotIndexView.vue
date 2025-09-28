<template>
    <ContentField>
        <div>我的Bot</div>
    </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import $ from 'jquery'
import { useStore } from 'vuex';

export default {
    name: 'UserBotIndexView',
    components: {
        ContentField,
    },

    setup() {
        const store = useStore();
        // $.ajax({
        //     url: "http://127.0.0.1:3000/user/bot/update/",
        //     type: "POST",
        //     data: {
        //         bot_id: 7,
        //         title: "Bot的标题777",
        //         description: "Bot 的描述777",
        //         content: "Bot的代码777",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },
        //     success(resp) {
        //         console.log(resp);
        //     },
        //     error(resp) {
        //         console.log(resp);
        //     }
        // });

        $.ajax({
            url: "http://127.0.0.1:3000/user/bot/getlist/",
            type: "GET",
            // data: {
            //     bot_id: 6,
            // },
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.log(resp);
            }
        })
    }
}
</script>

<style scoped>

</style>
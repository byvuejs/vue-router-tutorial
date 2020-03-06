<template>
    <div>
        <span>유저 번호 : {{ userId }}</span>
        <v-btn @click="edit">수정</v-btn>
    </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id;
        }
    },
    methods: {
        edit() {
            this.$router.push({ name: 'users-edit' });
        }
    }
}
</script>
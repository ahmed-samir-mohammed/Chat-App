<template>
    <div class="chat container">
        <h2 class="teal-text"> Chat Room </h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <div class="ch-top">
                            <span class="teal-text"> {{ message.name }} </span>
                            <span class="gray-text time"> {{ message.timestamp }} </span>
                        </div>
                        <span class="gray-text text-darken-3"> {{ message.content }} </span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name='name' />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import Moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data () {
        return {
            messages: []
        }
    },
    created () {
        let ref = db.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(chang => {
                if (chang.type == 'added') {
                    let doc = chang.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: Moment(doc.data().timestamp).format('LT')
                    })
                }
            })
        })
    }
}
</script>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .chat h2 {
        text-transform: capitalize;
        font-size: 2.6em;
    }
    .card {
        width: 100%
    }
    .chat span {
        font-size: 1.2em
    }
    .chat span:first-child {
        text-transform: capitalize;
        font-size: 1.4em
    }
    .chat .time {
        display: block;
        font-size: .8em
    }
    .messages {
        max-height: 60vh;
        overflow: auto;
    }
    .messages::-webkit-scrollbar {
        width: 5px;
        border-radius: 5px
    }
    .messages::-webkit-scrollbar-track {
        background: #ddd;
        border-radius: 5px
    }
    .messages::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 5px
    }
    li {
        margin-bottom: 1em;
        border: 1px solid #ededed;
        padding: .5em 1em;
        border-radius: .25em;
        /* box-shadow: 0px 5px 6px 0 #ddd */
    }
    .ch-top {
        display: flex;
        align-items: center;
        justify-content: space-between
    }
</style>
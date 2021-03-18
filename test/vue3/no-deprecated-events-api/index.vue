<script>
/* ✗ BAD */
export default {
    mounted() {
        this.$on('start', args => {
            console.log('start', args)
        })
        this.$emit('start')
    }
}
</script>

<script>
/* ✓ GOOD */
import mitt from 'mitt'
const emitter = mitt()
export default {
    mounted() {
        emitter.on('start', function (args) {
            console.log('start')
        })
        emitter.emit('start')
    }
}
</script>

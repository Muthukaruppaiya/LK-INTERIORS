import { motion } from 'framer-motion'

export default function Scene3D() {
  return (
    <div className="scene3d" aria-hidden>
      <motion.div
        className="scene3d__stage"
        animate={{ rotateY: [ -18, 18, -18 ], rotateX: [8, 4, 8] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="scene3d__floor" />
        <div className="scene3d__wall scene3d__wall--back" />
        <div className="scene3d__wall scene3d__wall--left" />
        <div className="scene3d__sofa" />
        <div className="scene3d__table" />
        <div className="scene3d__lamp" />
      </motion.div>
      <p className="scene3d__caption">Live 3D mood</p>
    </div>
  )
}

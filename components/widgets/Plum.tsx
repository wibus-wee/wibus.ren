/*
 * @FilePath: /iucky.cn/components/widgets/Plum.tsx
 * @author: Wibus
 * @Date: 2022-08-26 17:33:12
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-26 18:48:23
 * Coding With IU
 */

import { useEffect, useRef, useState } from "react"
import { useMount, useRaf, useRafLoop as rafLoop } from "react-use"

export const Plum = () => {
  const [windowSize, setWindowSize] = useState({
    width: 400,
    height: 400,
  });

  const r180 = Math.PI
  const r90 = Math.PI / 2
  const r15 = Math.PI / 12
  const color = '#88888825'
  const el = useRef<HTMLCanvasElement | null>(null)
  const { random } = Math
  const start = useRef(() => { })
  const init = useRef(4)
  const len = useRef(6)
  const stopped = useRef(false)
  function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    // @ts-expect-error vendor
    const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
    const dpi = _dpi || dpr / bsr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.width = dpi * width
    canvas.height = dpi * height
    ctx.scale(dpi, dpi)
    return { ctx, dpi }
  }
  function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
    const dx = r * Math.cos(theta)
    const dy = r * Math.sin(theta)
    return [x + dx, y + dy]
  }

  useEffect(() => {
    const canvas = el.current!
    const { ctx } = initCanvas(canvas, window.innerWidth, window.innerHeight)
    const { width, height } = canvas
    let steps = new Array()
    let prevSteps = new Array()
    let iterations = 0
    const step = (x: number, y: number, rad: number) => { // 每次移动的距离
      const length = random() * len.current // 随机长度
      const [nx, ny] = polar2cart(x, y, length, rad) // 移动后的坐标
      ctx.beginPath() // 开始绘制
      ctx.moveTo(x, y) // 移动到当前坐标
      ctx.lineTo(nx, ny) // 绘制直线
      ctx.stroke() // 绘制
      const rad1 = rad + random() * r15 // 随机角度
      const rad2 = rad - random() * r15
      if (nx < -100 || nx > window.innerWidth + 100 || ny < -100 || ny > window.innerHeight + 100) {  // 判断是否超出边界
        console.warn('超出边界');
        return;
      }
      if (iterations <= init.current || random() > 0.5) { // 判断是否继续绘制
        steps.push(() => step(nx, ny, rad1)) // 将绘制的坐标和角度放入数组
        if (iterations <= init.current || random() > 0.5)
          steps.push(() => step(nx, ny, rad2))
      }
    }
    let lastTime = performance.now() // 获取当前时间
    const interval = 1000 / 40 // 用于控制绘制的帧率，每秒40帧
    // 在每个requestAnimationFrame. 控制暂停和恢复。
    const control = () => {
      // if (stopped.current) {
      //   stopped.current = false
      //   console.log(stopped.current)
      //   return
      // }
      const now = performance.now() // 获取当前时间
      if (now - lastTime > interval) { // 判断是否超过帧率
        lastTime = now // 更新时间
        steps.forEach(step => step()) // 遍历数组，执行每个绘制函数
        steps = steps.filter(step => step()) // 删除已经绘制完成的函数
        iterations++ // 记录绘制的次数
        if (iterations > init.current) { // 判断是否绘制完成
          stopped.current = true // 标记绘制完成
        }
      }
      requestAnimationFrame(control) // 循环绘制
    }
    requestAnimationFrame(control) // 循环绘制
    const frame = () => {  // 每一帧的操作
      if (performance.now() - lastTime < interval) // 如果上一帧绘制完成，则继续绘制下一帧
        return
      iterations += 1 // 记录迭代次数
      prevSteps = steps // 将上一帧的步骤保存下来
      steps = [] // 清空上一帧的步骤
      lastTime = performance.now() // 记录上一帧的时间
      // if (!prevSteps.length) { // 如果上一帧没有步骤，则初始化
      //   stopped.current = true // 设置为停止状态
      // }
      prevSteps.forEach(i => i()) // 执行上一帧的步骤
    }

    setInterval(frame, 1000) // 循环绘制
    setInterval(() => {
      requestAnimationFrame(control) // 循环绘制
    }, 1000)

    start.current = () =>
      start.current = () => {
        iterations = 0
        ctx.clearRect(0, 0, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle = color
        prevSteps = []
        steps = [
          () => step(random() * window.innerWidth, 0, r90),
          () => step(random() * window.innerWidth, window.innerHeight, -r90),
          () => step(0, random() * window.innerHeight, 0),
          () => step(window.innerWidth, random() * window.innerHeight, r180),
        ]
        if (window.innerWidth < 500)
          steps = steps.slice(0, 2)
        // 开始绘制
        // stopped.current = false // 设置为没有停止状态
      }
    start.current() // 开始绘制
  }, [])
  // const mask = computed(() => '')
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none"
      style={{
        zIndex: -1,
        maskImage: 'radial-gradient(circle, transparent, black);',
        WebkitMaskImage: 'radial-gradient(circle, transparent, black);',
      }}>
      <canvas
        ref={el}
        width={"400"}
        height={"400"}
      />
    </div>
  )
}


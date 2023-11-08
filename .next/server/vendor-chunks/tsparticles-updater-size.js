"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-size";
exports.ids = ["vendor-chunks/tsparticles-updater-size"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-size/cjs/SizeUpdater.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/cjs/SizeUpdater.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SizeUpdater = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-size/cjs/Utils.js\");\nclass SizeUpdater {\n    init(particle) {\n        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;\n        if (sizeAnimation.enable) {\n            particle.size.velocity =\n                ((particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / 100) *\n                    container.retina.reduceFactor;\n            if (!sizeAnimation.sync) {\n                particle.size.velocity *= (0, tsparticles_engine_1.getRandom)();\n            }\n        }\n    }\n    isEnabled(particle) {\n        return (!particle.destroyed &&\n            !particle.spawning &&\n            particle.size.enable &&\n            ((particle.size.maxLoops ?? 0) <= 0 ||\n                ((particle.size.maxLoops ?? 0) > 0 && (particle.size.loops ?? 0) < (particle.size.maxLoops ?? 0))));\n    }\n    reset(particle) {\n        particle.size.loops = 0;\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0, Utils_1.updateSize)(particle, delta);\n    }\n}\nexports.SizeUpdater = SizeUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2Nqcy9TaXplVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pELGdCQUFnQixtQkFBTyxDQUFDLDJFQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBvcnRvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItc2l6ZS9janMvU2l6ZVVwZGF0ZXIuanM/MmRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2l6ZVVwZGF0ZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jb25zdCBVdGlsc18xID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5jbGFzcyBTaXplVXBkYXRlciB7XG4gICAgaW5pdChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBwYXJ0aWNsZS5jb250YWluZXIsIHNpemVPcHRpb25zID0gcGFydGljbGUub3B0aW9ucy5zaXplLCBzaXplQW5pbWF0aW9uID0gc2l6ZU9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAoc2l6ZUFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNpemUudmVsb2NpdHkgPVxuICAgICAgICAgICAgICAgICgocGFydGljbGUucmV0aW5hLnNpemVBbmltYXRpb25TcGVlZCA/PyBjb250YWluZXIucmV0aW5hLnNpemVBbmltYXRpb25TcGVlZCkgLyAxMDApICpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3I7XG4gICAgICAgICAgICBpZiAoIXNpemVBbmltYXRpb24uc3luYykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNpemUudmVsb2NpdHkgKj0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmRvbSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuICghcGFydGljbGUuZGVzdHJveWVkICYmXG4gICAgICAgICAgICAhcGFydGljbGUuc3Bhd25pbmcgJiZcbiAgICAgICAgICAgIHBhcnRpY2xlLnNpemUuZW5hYmxlICYmXG4gICAgICAgICAgICAoKHBhcnRpY2xlLnNpemUubWF4TG9vcHMgPz8gMCkgPD0gMCB8fFxuICAgICAgICAgICAgICAgICgocGFydGljbGUuc2l6ZS5tYXhMb29wcyA/PyAwKSA+IDAgJiYgKHBhcnRpY2xlLnNpemUubG9vcHMgPz8gMCkgPCAocGFydGljbGUuc2l6ZS5tYXhMb29wcyA/PyAwKSkpKTtcbiAgICB9XG4gICAgcmVzZXQocGFydGljbGUpIHtcbiAgICAgICAgcGFydGljbGUuc2l6ZS5sb29wcyA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZShwYXJ0aWNsZSwgZGVsdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZChwYXJ0aWNsZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoMCwgVXRpbHNfMS51cGRhdGVTaXplKShwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2l6ZVVwZGF0ZXIgPSBTaXplVXBkYXRlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/cjs/SizeUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-size/cjs/Utils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/cjs/Utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateSize = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nfunction checkDestroy(particle, value, minValue, maxValue) {\n    switch (particle.options.size.animation.destroy) {\n        case \"max\":\n            if (value >= maxValue) {\n                particle.destroy();\n            }\n            break;\n        case \"min\":\n            if (value <= minValue) {\n                particle.destroy();\n            }\n            break;\n    }\n}\nfunction updateSize(particle, delta) {\n    const data = particle.size;\n    if (particle.destroyed ||\n        !data ||\n        !data.enable ||\n        ((data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0))) {\n        return;\n    }\n    const sizeVelocity = (data.velocity ?? 0) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;\n    if (!data.time) {\n        data.time = 0;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        data.time += delta.value;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        return;\n    }\n    switch (data.status) {\n        case \"increasing\":\n            if (data.value >= maxValue) {\n                data.status = \"decreasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            }\n            else {\n                data.value += sizeVelocity;\n            }\n            break;\n        case \"decreasing\":\n            if (data.value <= minValue) {\n                data.status = \"increasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            }\n            else {\n                data.value -= sizeVelocity;\n            }\n    }\n    if (data.velocity && decay !== 1) {\n        data.velocity *= decay;\n    }\n    checkDestroy(particle, data.value, minValue, maxValue);\n    if (!particle.destroyed) {\n        data.value = (0, tsparticles_engine_1.clamp)(data.value, minValue, maxValue);\n    }\n}\nexports.updateSize = updateSize;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2Nqcy9VdGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBvcnRvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItc2l6ZS9janMvVXRpbHMuanM/MTJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlU2l6ZSA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmZ1bmN0aW9uIGNoZWNrRGVzdHJveShwYXJ0aWNsZSwgdmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xuICAgIHN3aXRjaCAocGFydGljbGUub3B0aW9ucy5zaXplLmFuaW1hdGlvbi5kZXN0cm95KSB7XG4gICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWluXCI6XG4gICAgICAgICAgICBpZiAodmFsdWUgPD0gbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVTaXplKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgIGNvbnN0IGRhdGEgPSBwYXJ0aWNsZS5zaXplO1xuICAgIGlmIChwYXJ0aWNsZS5kZXN0cm95ZWQgfHxcbiAgICAgICAgIWRhdGEgfHxcbiAgICAgICAgIWRhdGEuZW5hYmxlIHx8XG4gICAgICAgICgoZGF0YS5tYXhMb29wcyA/PyAwKSA+IDAgJiYgKGRhdGEubG9vcHMgPz8gMCkgPiAoZGF0YS5tYXhMb29wcyA/PyAwKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaXplVmVsb2NpdHkgPSAoZGF0YS52ZWxvY2l0eSA/PyAwKSAqIGRlbHRhLmZhY3RvciwgbWluVmFsdWUgPSBkYXRhLm1pbiwgbWF4VmFsdWUgPSBkYXRhLm1heCwgZGVjYXkgPSBkYXRhLmRlY2F5ID8/IDE7XG4gICAgaWYgKCFkYXRhLnRpbWUpIHtcbiAgICAgICAgZGF0YS50aW1lID0gMDtcbiAgICB9XG4gICAgaWYgKChkYXRhLmRlbGF5VGltZSA/PyAwKSA+IDAgJiYgZGF0YS50aW1lIDwgKGRhdGEuZGVsYXlUaW1lID8/IDApKSB7XG4gICAgICAgIGRhdGEudGltZSArPSBkZWx0YS52YWx1ZTtcbiAgICB9XG4gICAgaWYgKChkYXRhLmRlbGF5VGltZSA/PyAwKSA+IDAgJiYgZGF0YS50aW1lIDwgKGRhdGEuZGVsYXlUaW1lID8/IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChkYXRhLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiaW5jcmVhc2luZ1wiOlxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9IFwiZGVjcmVhc2luZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5sb29wcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxvb3BzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS5sb29wcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSArPSBzaXplVmVsb2NpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlY3JlYXNpbmdcIjpcbiAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlIDw9IG1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0dXMgPSBcImluY3JlYXNpbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEubG9vcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sb29wcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEubG9vcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgLT0gc2l6ZVZlbG9jaXR5O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS52ZWxvY2l0eSAmJiBkZWNheSAhPT0gMSkge1xuICAgICAgICBkYXRhLnZlbG9jaXR5ICo9IGRlY2F5O1xuICAgIH1cbiAgICBjaGVja0Rlc3Ryb3kocGFydGljbGUsIGRhdGEudmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgaWYgKCFwYXJ0aWNsZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgZGF0YS52YWx1ZSA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jbGFtcCkoZGF0YS52YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICB9XG59XG5leHBvcnRzLnVwZGF0ZVNpemUgPSB1cGRhdGVTaXplO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-size/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadSizeUpdater = void 0;\nconst SizeUpdater_1 = __webpack_require__(/*! ./SizeUpdater */ \"(ssr)/./node_modules/tsparticles-updater-size/cjs/SizeUpdater.js\");\nasync function loadSizeUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"size\", () => new SizeUpdater_1.SizeUpdater(), refresh);\n}\nexports.loadSizeUpdater = loadSizeUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsc0JBQXNCLG1CQUFPLENBQUMsdUZBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0by8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXNpemUvY2pzL2luZGV4LmpzPzQwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRTaXplVXBkYXRlciA9IHZvaWQgMDtcbmNvbnN0IFNpemVVcGRhdGVyXzEgPSByZXF1aXJlKFwiLi9TaXplVXBkYXRlclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRTaXplVXBkYXRlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFBhcnRpY2xlVXBkYXRlcihcInNpemVcIiwgKCkgPT4gbmV3IFNpemVVcGRhdGVyXzEuU2l6ZVVwZGF0ZXIoKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRTaXplVXBkYXRlciA9IGxvYWRTaXplVXBkYXRlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/cjs/index.js\n");

/***/ })

};
;
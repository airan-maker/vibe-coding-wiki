"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";
import type { TutorialStep } from "@/lib/tutorials-data";

interface TutorialStepsProps {
  steps: TutorialStep[];
}

export default function TutorialSteps({ steps }: TutorialStepsProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        📋 단계별 가이드
      </h2>

      {steps.map((step) => {
        const isExpanded = expandedStep === step.step;

        return (
          <div
            key={step.step}
            className={`rounded-xl border transition-all ${
              isExpanded
                ? "border-purple-500/50 bg-gray-800/50"
                : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setExpandedStep(isExpanded ? null : step.step)}
              className="w-full p-4 sm:p-6 flex items-center gap-4 text-left"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${
                  isExpanded
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {step.step}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate">
                  {step.description}
                </p>
              </div>
              <span
                className={`text-gray-500 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Content */}
            {isExpanded && (
              <div className="px-4 sm:px-6 pb-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>

                {/* Prompt */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      프롬프트
                    </h4>
                    <CopyButton text={step.prompt} />
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 overflow-x-auto">
                    <pre className="text-gray-100 text-xs sm:text-sm whitespace-pre-wrap font-mono leading-relaxed">
                      {step.prompt}
                    </pre>
                  </div>
                </div>

                {/* Expected Output */}
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                    <span className="text-green-400">▸</span>
                    예상 결과물
                  </h4>
                  <p className="text-gray-400 text-sm bg-green-900/20 rounded-lg p-3 border border-green-800/30">
                    {step.expectedOutput}
                  </p>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">▸</span>
                    팁
                  </h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm"
                      >
                        <span className="text-yellow-500 shrink-0">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4 border-t border-gray-700">
                  {step.step > 1 ? (
                    <button
                      onClick={() => setExpandedStep(step.step - 1)}
                      className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                    >
                      ← 이전 단계
                    </button>
                  ) : (
                    <div />
                  )}
                  {step.step < steps.length ? (
                    <button
                      onClick={() => setExpandedStep(step.step + 1)}
                      className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                    >
                      다음 단계 →
                    </button>
                  ) : (
                    <span className="text-green-400 text-sm">🎉 완료!</span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

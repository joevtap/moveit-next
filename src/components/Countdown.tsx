import { useState, useEffect, useContext, ChangeEvent } from "react";
import styles from "../styles/components/Countdown.module.scss";
import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        setinputMinutes,
        inputMinutes,
    } = useContext(CountdownContext);

    const { activeChallenge } = useContext(ChallengesContext);

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    function handleInputRangeChange(event: ChangeEvent<HTMLInputElement>) {
        setinputMinutes(Number(event.target.value));
    }
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight} </span>
                </div>
            </div>

            <div className={styles.inputRange}>
                <input
                    type="range"
                    onChange={handleInputRangeChange}
                    value={`${inputMinutes}`}
                    disabled={isActive || activeChallenge != null}
                    max="99"
                    min="1"
                />
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            onClick={resetCountdown}
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            onClick={startCountdown}
                            type="button"
                            className={styles.countdownButton}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

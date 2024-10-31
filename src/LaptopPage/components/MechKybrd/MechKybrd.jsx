import './MechKybrd.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function MechKybrd() {

    return (
        <div class="mechanical-keyboard">

            <div class="first-row">
                <div class="key">Esc</div>
                <div></div>
                <div class="fbuttons">
                    <div class="key red-outline">F1</div>
                    <div class="key red-outline">F2</div>
                    <div class="key red-outline">F3</div>
                    <div class="key red-outline">F4</div>
                    <div/>
                    <div class="key">F5</div>
                    <div class="key">F6</div>
                    <div class="key">F7</div>
                    <div class="key">F8</div>
                    <div/>
                    <div class="key">F9</div>
                    <div class="key">F10</div>
                    <div class="key">F11</div>
                    <div class="key">F12</div>
                </div>
                <div/>
                <div class="prnt-ins-del">
                    <div class="key">
                        PrtSc
                    </div>
                    <div class="key">
                        Ins
                    </div>
                    <div class="key">
                        Del
                    </div>
                </div>
                <div className='key'>
                    <i class="bi bi-power"></i>
                </div>

            </div>

            <div class="second-row">
                <div class="key tick"><div>~</div><div>`</div></div>
                <div class="key">1</div>
                <div class="key">2</div>
                <div class="key">3</div>
                <div class="key">4</div>
                <div class="key">5</div>
                <div class="key">6</div>
                <div class="key">7</div>
                <div class="key">8</div>
                <div class="key">9</div>
                <div class="key">0</div>
                <div class="key undersc-minus"><div>_</div> <div>-</div></div>
                <div class="key plus-equals"><div>+</div> <div>=</div></div>
                <div class="key backspace">← Backspace</div>
            </div>

            <div class="third-row">
                <div class="key tab">Tab</div>
                <div class="key">Q</div>
                <div class="key wasd">W</div>
                <div class="key">E</div>
                <div class="key">R</div>
                <div class="key">T</div>
                <div class="key">Y</div>
                <div class="key">U</div>
                <div class="key">I</div>
                <div class="key">O</div>
                <div class="key">P</div>
                <div class="key">[</div>
                <div class="key">]</div>
                <div class="key backslash"><div>|</div><div>\</div></div>
            </div>

            <div class="fourth-row">
                <div class="key">Caps</div>
                <div class="key wasd">A</div>
                <div class="key wasd">S</div>
                <div class="key wasd">D</div>
                <div class="key">F</div>
                <div class="key">G</div>
                <div class="key">H</div>
                <div class="key">J</div>
                <div class="key">K</div>
                <div class="key">L</div>
                <div class="key">;</div>
                <div class="key">'</div>
                <div class="key">Enter</div>
            </div>

            <div class="fifth-row">
                <div class="key">Shift</div>
                <div class="key">Z</div>
                <div class="key">X</div>
                <div class="key">C</div>
                <div class="key">V</div>
                <div class="key">B</div>
                <div class="key">N</div>
                <div class="key">M</div>
                <div class="key">,</div>
                <div class="key">.</div>
                <div class="key">/</div>
                <div class="key">Shift</div>
                <div class="key arrow">&#8593;</div>
            </div>
        
            <div class="sixth-row">
                <div class="key">Ctrl</div>
                <div class="key">Fn</div>
                <div class="key">🪟</div>
                <div class="key">Alt</div>
                <div class="key space">________________</div>
                <div class="key">Alt</div>
                <div class="key">Ctrl</div>
                <div class="key arrow">&#8592;</div>
                <div class="key arrow">&#8595;</div>
                <div class="key arrow">&#8594;</div>
            </div>
        </div>
    )
}
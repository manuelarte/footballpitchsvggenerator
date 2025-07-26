import re


class FootballPitchVars:
    pitch_length: int
    pitch_width: int
    pitch_percentage_shown: float
    pitch_grass_cut_width: int
    extra_space: int
    def __init__(self):
        self.pitch_length = 120
        self.pitch_width = 90
        self.pitch_percentage_shown = 0.6
        self.pitch_grass_cut_width = 10
        self.extra_space = 3

def main():
    with open("football-pitch.svg.template") as f:
        print("Template file read")
        template: str = f.read()
        template_vars: FootballPitchVars = FootballPitchVars()
        for pitch in template_vars.__dict__:
            to_replace: str = f"{{{{ ${pitch} }}}}"
            to = getattr(template_vars, pitch)
            print(f"Replacing {to_replace}: {to}")
            template = template.replace(to_replace, str(to))

        eval_re = re.compile(r"{{ eval\((.*?)\) }}")
        for s in re.findall(eval_re, template):
            evaled = eval(s)
            print(f"Evaluating {s} = {evaled}")
            template = template.replace(f"{{{{ eval({s}) }}}}", str(evaled))
        with open(f"football-pitch-parsed-{template_vars.pitch_length}_{template_vars.pitch_width}.svg", "w") as text_file:
            text_file.write(template)
            print("SVG file created")

if __name__ == "__main__":
    main()

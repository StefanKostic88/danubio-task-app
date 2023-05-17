import {
  ErrorWindowStyled,
  ErrorInnerStyled,
  ErrorMessageStyled,
} from "../../../assets";

const ErrorComponent = () => {
  return (
    <ErrorWindowStyled>
      <ErrorInnerStyled>
        <ErrorMessageStyled>
          Rick: Morty, Morty, I think we've got ourselves a problem here. I've
          been scanning the entire multiverse, and I can't seem to find any
          characters. It's like they've vanished into thin air, Morty.
        </ErrorMessageStyled>

        <ErrorMessageStyled>
          Morty: Oh, geez, Rick. What do you mean, no characters?
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Rick: Well, Morty, it appears we've stumbled upon a glitch in the
          simulation. Someone must have messed with the code, and now all the
          characters have gone missing. This is some serious interdimensional
          malfunction, Morty.
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Morty: W-what are we gonna do, Rick? How can we fix this?
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Rick: Hold on a second, Morty. I think I have an idea. We're gonna
          have to dive deep into the coding of this simulation and rewrite the
          script. We'll bring those characters back, even if it takes us all
          night, Morty.
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Morty: B-but, Rick, I don't know anything about coding!
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Rick: Don't worry, Morty. I'll do all the heavy lifting. Just stand
          there and look confused, like you always do.
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Morty: Uh, okay, Rick. If you say so.
        </ErrorMessageStyled>
      </ErrorInnerStyled>
    </ErrorWindowStyled>
  );
};

export default ErrorComponent;

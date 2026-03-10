import { useNavigate as useReactNavigate } from "react-router-dom";

export function useNavigation(){
  const navigate = useReactNavigate();

  return {
    goToHome: () => navigate('/'),
    goToPlayersForm: (count:number) => navigate(`/players?count=${count}`),
    goToPlayerWheel: () => navigate('/wheel/players'),
    goCategoryWheel: () => navigate('/wheel/categories'),
    goToQuestionWheel: () => navigate('/wheel/questions'),
  };
}
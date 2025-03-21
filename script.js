const onboardingForm = document.getElementById('onboardingForm');
const profileList = document.getElementById('profile-list');
const chat = document.getElementById('chat');
const playerProfilesContainer = document.getElementById('playerProfiles');
const chatMessagesContainer = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

const activitiesSection = document.getElementById('activities');
const activityListContainer = document.getElementById('activityList');
const createActivityButton = document.getElementById('createActivityButton');
const createActivityForm = document.getElementById('createActivityForm');
const cancelActivityButton = document.getElementById('cancelActivityButton');

const cafeFields = document.getElementById('cafeFields');
const pickleballFields = document.getElementById('pickleballFields');
const activityTypeSelect = document.getElementById('activityType');

let activities = [];
let currentChatPartner = null;

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function
